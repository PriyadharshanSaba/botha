import { db } from "@/app/lib/db";
import { googleConnectionStatus } from "@/app/lib/google/calendar";
import MeetingsAdminPanel from "@/app/components/admin/MeetingsAdminPanel";

export default async function AdminMeetingsPage() {
  const [settings, blackouts, bookings, google] = await Promise.all([
    db.getMeetingSettings(),
    db.listBlackouts(),
    db.listUpcomingBookings(),
    googleConnectionStatus(),
  ]);

  return (
    <main>
      <h1 className="admin-h1">Meetings</h1>
      <p className="admin-sub">Manage bookable hours, blocked dates, and Google Calendar sync for /meet.</p>
      <MeetingsAdminPanel
        initialSettings={settings}
        initialBlackouts={blackouts}
        initialBookings={bookings}
        initialGoogle={google}
      />
    </main>
  );
}
