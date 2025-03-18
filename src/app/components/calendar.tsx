"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { format } from "date-fns";

interface Meeting {
  id: number;
  time: Date;
  title: string;
  description: string;
}

async function fetchMeetings(): Promise<Meeting[]> {
  try {
    const response = await axios.get("http://localhost:5000/admin/meetings");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch meetings");
    toast.error("Failed to fetch meetings");
  }
}

async function createMeeting(meeting: Meeting): Promise<Meeting> {
  try {
    const response = await axios.post("http://localhost:5000/admin/meetings/create", meeting);
    return response.data;
    toast.success("Metting Created!");
  } catch (error) {
    throw new Error("Failed to create meeting");
    toast.error("Failed to create meeting");
  }
}

async function updateMeeting(meeting: Meeting): Promise<Meeting> {
  try {
    const response = await axios.put(`http://localhost:5000/admin/meetings/update/${meeting.id}`, meeting);
    return response.data;
    toast.success("Updated meeting Successfully...");
  } catch (error) {
    throw new Error("Failed to update meeting");
    toast.error("Failed to update meeting");
  }
}

async function deleteMeeting(meetingId: number): Promise<void> {
  try {
    await axios.delete(`http://localhost:5000/admin/meetings/delete/${meetingId}`);
    toast.success("Profile Deleted Successfully...");
  } catch (error) {
    throw new Error("Failed to delete meeting");
    toast.error("Failed to delete meeting");
  }
}

export default function Calendar() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMeetings, setSelectedMeetings] = useState<Meeting[]>([]);
  const [editingMeeting, setEditingMeeting] = useState<Meeting | null>(null);
  const [newMeeting, setNewMeeting] = useState<Meeting>({
    id: 0,
    time: new Date(),
    title: "",
    description: "",
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMeetings = async () => {
      try {
        const fetchedMeetings = await fetchMeetings();
        setMeetings(fetchedMeetings);
      } catch (error) {
        setError("Failed to load meetings. Please try again later.");
      }
    };
    loadMeetings();
  }, []);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const todayMeetings = meetings.filter((meeting) => {
    const meetingDate = new Date(meeting.time);
    return (
      meetingDate.getDate() === new Date().getDate() &&
      meetingDate.getMonth() === new Date().getMonth() &&
      meetingDate.getFullYear() === new Date().getFullYear()
    );
  });

  const goToPreviousMonth = () => {
  setCurrentDate((prevDate) => {
    const newDate = new Date(prevDate); // Create a new Date object to avoid mutation
    newDate.setMonth(newDate.getMonth() - 1); // Update the month
    return newDate;
  });
};

const goToNextMonth = () => {
  setCurrentDate((prevDate) => {
    const newDate = new Date(prevDate); // Create a new Date object to avoid mutation
    newDate.setMonth(newDate.getMonth() + 1); // Update the month
    return newDate;
  });
};

  const getFirstDayOfMonth = () => {
    return new Date(currentYear, currentMonth, 1).getDay();
  };

  const getDaysInMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  const handleSelectDay = (day: number) => {
    const selected = new Date(currentYear, currentMonth, day);
    setSelectedDate(selected);
    const dayMeetings = meetings.filter(
      (meeting) =>
        new Date(meeting.time).getDate() === day && new Date(meeting.time).getMonth() === currentMonth
    );
    setSelectedMeetings(dayMeetings);
  };

  const handleCreateMeeting = async () => {
    try {
      const createdMeeting = await createMeeting({
        ...newMeeting,
        time: selectedDate || new Date(),
      });
      setMeetings((prevMeetings) => [...prevMeetings, createdMeeting]);
      setNewMeeting({
        id: 0,
        time: new Date(),
        title: "",
        description: "",
      });
    } catch (error) {
      setError("Failed to create meeting. Please try again.");
    }
  };

  const handleUpdateMeeting = async () => {
    if (!editingMeeting) return;
    try {
      const updatedMeeting = await updateMeeting(editingMeeting);
      setMeetings((prevMeetings) =>
        prevMeetings.map((m) => (m.id === updatedMeeting.id ? updatedMeeting : m))
      );
      setEditingMeeting(null);
    } catch (error) {
      setError("Failed to update meeting. Please try again.");
    }
  };

  const handleDeleteMeeting = async (meetingId: number) => {
    try {
      await deleteMeeting(meetingId);
      setMeetings((prevMeetings) => prevMeetings.filter((m) => m.id !== meetingId));
    } catch (error) {
      setError("Failed to delete meeting. Please try again.");
    }
  };

  const hasMeeting = (day: number) => {
    return meetings.some((meeting) => {
      const meetingDate = new Date(meeting.time);
      return meetingDate.getDate() === day && meetingDate.getMonth() === currentMonth;
    });
  };

  const generateCalendar = () => {
    const firstDay = getFirstDayOfMonth();
    const daysInMonth = getDaysInMonth();
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div className="empty-day w-16 h-16" key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = new Date().getDate() === day && new Date().getMonth() === currentMonth;
      const hasMeetingOnDay = hasMeeting(day);

      calendarDays.push(
        <div
          key={day}
          className={`flex items-center justify-center cursor-pointer ${
            isToday
              ? "bg-green-300"
              : hasMeetingOnDay
              ? "bg-yellow-300"
              : "bg-gray-200"
          } hover:bg-yellow-400 w-16 h-16 rounded-lg`}
          onClick={() => handleSelectDay(day)}
        >
          <span className={`text-sm ${isToday ? "font-bold text-green-700" : ""}`}>{day}</span>
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <>
    <Toaster />
    <div className="max-w-4xl mx-auto mt-6">
      {/* Today's Meetings Section */}
      {todayMeetings.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold">Today's Meetings</h3>
          <ul className="mt-2 space-y-2">
            {todayMeetings.map((meeting) => (
              <li key={meeting.id} className="p-3 border rounded-lg bg-gray-100">
                <p className="font-semibold">{meeting.title}</p>
                <p className="text-sm">{format(new Date(meeting.time), "hh:mm a")}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400"
          onClick={goToPreviousMonth}
        >
          Previous
        </button>
        <h2 className="text-xl font-semibold">{format(currentDate, "MMM yyyy")}</h2>
        <button
          className="bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400"
          onClick={goToNextMonth}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>

      {selectedDate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Meetings for {format(selectedDate, "dd MMM yyyy")}
            </h3>
            <div className="space-y-4">
              {selectedMeetings.map((meeting) => (
                <div key={meeting.id} className="p-3 border rounded-lg bg-gray-100">
                  <p className="font-semibold">{meeting.title}</p>
                  <p className="text-sm">{format(new Date(meeting.time), "hh:mm a")}</p>
                  <button
                    className="text-blue-500 text-sm mr-2"
                    onClick={() => setEditingMeeting(meeting)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 text-sm"
                    onClick={() => handleDeleteMeeting(meeting.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            {editingMeeting ? (
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Edit Meeting</h4>
                <input
                  type="text"
                  value={editingMeeting.title}
                  onChange={(e) =>
                    setEditingMeeting((prev) => prev && { ...prev, title: e.target.value })
                  }
                  placeholder="Meeting Title"
                  className="border w-full p-2 rounded mb-2"
                />
                <textarea
                  value={editingMeeting.description}
                  onChange={(e) =>
                    setEditingMeeting((prev) => prev && { ...prev, description: e.target.value })
                  }
                  placeholder="Meeting Description"
                  className="border w-full p-2 rounded mb-2"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleUpdateMeeting}
                >
                  Update Meeting
                </button>
              </div>
            ) : (
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Create New Meeting</h4>
                <input
                  type="text"
                  value={newMeeting.title}
                  onChange={(e) =>
                    setNewMeeting((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="Meeting Title"
                  className="border w-full p-2 rounded mb-2"
                />
                <textarea
                  value={newMeeting.description}
                  onChange={(e) =>
                    setNewMeeting((prev) => ({ ...prev, description: e.target.value }))
                  }
                  placeholder="Meeting Description"
                  className="border w-full p-2 rounded mb-2"
                />
                <div className="flex justify-between">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded"
                      onClick={handleCreateMeeting}
                    >
                      Create Meeting
                    </button>
                    <button
                      className="bg-gray-700 text-white px-4 py-2 rounded"
                      onClick={() => setSelectedDate(null)}
                    >
                    Cancel
                    </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {error && (
        <div className="bg-red-200 text-red-700 p-4 rounded mt-4">
          {error}
          <button
            className="text-red-500 ml-4"
            onClick={() => setError(null)}
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
    </>
  );
}
