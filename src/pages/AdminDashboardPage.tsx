import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Users,
  CheckCircle,
  XCircle,
  MessageSquare,
  Calendar,
  Mail,
  UtensilsCrossed,
  LogOut,
  Search,
  Filter,
  Download,
  Loader2,
  ChevronDown
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface RSVP {
  id: string;
  name: string;
  email: string;
  attending: boolean;
  guest_count: number;
  meal_preference: string | null;
  dietary_restrictions: string | null;
  message: string | null;
  created_at: string;
}

const AdminDashboardPage = () => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'attending' | 'declined'>('all');
  const [stats, setStats] = useState({ total: 0, attending: 0, declined: 0, totalGuests: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchRSVPs();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
    }
  };

  const fetchRSVPs = async () => {
    try {
      const { data, error } = await supabase
        .from('rsvp_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setRsvps(data || []);
      calculateStats(data || []);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data: RSVP[]) => {
    const attending = data.filter(r => r.attending);
    const declined = data.filter(r => !r.attending);
    const totalGuests = attending.reduce((sum, r) => sum + r.guest_count, 0);

    setStats({
      total: data.length,
      attending: attending.length,
      declined: declined.length,
      totalGuests,
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const filteredRSVPs = rsvps.filter(rsvp => {
    const matchesSearch =
      rsvp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rsvp.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === 'all' ||
      (filter === 'attending' && rsvp.attending) ||
      (filter === 'declined' && !rsvp.attending);

    return matchesSearch && matchesFilter;
  });

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Attending', 'Guest Count', 'Meal Preference', 'Dietary Restrictions', 'Message', 'Submitted At'];
    const csvData = filteredRSVPs.map(rsvp => [
      rsvp.name,
      rsvp.email,
      rsvp.attending ? 'Yes' : 'No',
      rsvp.guest_count,
      rsvp.meal_preference || '',
      rsvp.dietary_restrictions || '',
      rsvp.message || '',
      new Date(rsvp.created_at).toLocaleDateString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wedding-rsvps-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-blush-500" fill="currentColor" />
              <h1 className="font-serif text-xl text-gray-800">
                RSVP Dashboard
              </h1>
            </div>

            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blush-600 hover:bg-blush-50 rounded-lg transition-colors duration-300"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-sans text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">Total</span>
            </div>
            <p className="font-serif text-3xl text-gray-800">{stats.total}</p>
            <p className="font-sans text-sm text-gray-500">Responses</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">Attending</span>
            </div>
            <p className="font-serif text-3xl text-green-600">{stats.attending}</p>
            <p className="font-sans text-sm text-gray-500">{stats.totalGuests} guests</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-5 h-5 text-gray-400" />
              <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">Declined</span>
            </div>
            <p className="font-serif text-3xl text-gray-600">{stats.declined}</p>
            <p className="font-sans text-sm text-gray-500">Not attending</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gold-100">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-5 h-5 text-gold-600" />
              <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">Wedding</span>
            </div>
            <p className="font-serif text-2xl text-gold-700">Oct 15</p>
            <p className="font-sans text-sm text-gray-500">2026</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300 appearance-none min-w-[160px]"
              >
                <option value="all">All Responses</option>
                <option value="attending">Attending</option>
                <option value="declined">Declined</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Export */}
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-6 py-2.5 bg-blush-500 hover:bg-blush-600 text-white font-sans text-sm rounded-lg transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-blush-500 animate-spin" />
          </div>
        ) : filteredRSVPs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-gray-800 mb-2">
              No RSVPs Yet
            </h3>
            <p className="font-sans text-gray-500">
              {searchTerm || filter !== 'all'
                ? 'No responses match your search criteria'
                : 'RSVP submissions will appear here'}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 font-sans text-xs uppercase tracking-wider text-gray-500">
              <div className="col-span-4 md:col-span-3">Guest</div>
              <div className="col-span-2 hidden md:block">Status</div>
              <div className="col-span-3 md:col-span-2">Guests</div>
              <div className="col-span-5 md:col-span-2">Meal</div>
              <div className="col-span-3 hidden md:block">Date</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* Table Rows */}
            {filteredRSVPs.map((rsvp) => (
              <div
                key={rsvp.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 items-center"
              >
                <div className="col-span-4 md:col-span-3">
                  <p className="font-sans font-medium text-gray-800 truncate">{rsvp.name}</p>
                  <p className="font-sans text-sm text-gray-500 truncate">{rsvp.email}</p>
                </div>

                <div className="col-span-2 hidden md:flex items-center gap-2">
                  {rsvp.attending ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Attending
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      <XCircle className="w-4 h-4" />
                      Declined
                    </span>
                  )}
                </div>

                <div className="col-span-3 md:col-span-2">
                  <p className="font-sans text-gray-800">
                    {rsvp.attending ? `${rsvp.guest_count} guest${rsvp.guest_count > 1 ? 's' : ''}` : '-'}
                  </p>
                </div>

                <div className="col-span-5 md:col-span-2">
                  <p className="font-sans text-gray-600 truncate">
                    {rsvp.meal_preference ? (
                      <span className="capitalize">{rsvp.meal_preference}</span>
                    ) : '-'}
                  </p>
                </div>

                <div className="col-span-3 hidden md:block">
                  <p className="font-sans text-sm text-gray-500">
                    {formatDate(rsvp.created_at)}
                  </p>
                </div>

                <div className="col-span-1 text-right">
                  <button
                    onClick={() => {
                      const details = [
                        `Name: ${rsvp.name}`,
                        `Email: ${rsvp.email}`,
                        `Attending: ${rsvp.attending ? 'Yes' : 'No'}`,
                        `Guest Count: ${rsvp.guest_count}`,
                        rsvp.meal_preference ? `Meal: ${rsvp.meal_preference}` : '',
                        rsvp.dietary_restrictions ? `Dietary: ${rsvp.dietary_restrictions}` : '',
                        rsvp.message ? `\nMessage:\n${rsvp.message}` : ''
                      ].filter(Boolean).join('\n');
                      alert(details);
                    }}
                    className="px-3 py-1.5 text-blush-600 hover:text-blush-700 hover:bg-blush-50 rounded-lg transition-colors duration-200 font-sans text-sm"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Count */}
        {!loading && filteredRSVPs.length > 0 && (
          <div className="text-center mt-6">
            <p className="font-sans text-sm text-gray-500">
              Showing {filteredRSVPs.length} of {rsvps.length} responses
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboardPage;
