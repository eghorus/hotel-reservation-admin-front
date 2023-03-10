export type Reservation = {
  _id: string;
  guest: { _id: string; name: string; image: string; passport: string };
  unit: { _id: string; number: number; roomType: { _id: string; type: string } };
  meals: "breakfast" | "lunch" | "all-inclusive";
  dates: {
    start: string;
    end: string;
  };
  payment: {
    isPaid: boolean;
    amount: number;
    method: "online" | "cash";
  };
  createdAt: string;
};

export const reservations: Reservation[] = [
  {
    _id: "1",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a1",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "1004", number: 1004, roomType: { _id: "superior", type: "superior" } },
    meals: "breakfast",
    dates: {
      start: "2023-01-24",
      end: "2023-01-28",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-01",
  },
  {
    _id: "2",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a2",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "1004", number: 1004, roomType: { _id: "superior", type: "superior" } },
    meals: "breakfast",
    dates: {
      start: "2023-03-01",
      end: "2023-03-05",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-02",
  },
  {
    _id: "3",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a1",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "1004", number: 1004, roomType: { _id: "superior", type: "superior" } },
    meals: "breakfast",
    dates: {
      start: "2023-03-08",
      end: "2023-03-10",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-03",
  },
  {
    _id: "1",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a1",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "2004", number: 2004, roomType: { _id: "superior", type: "superior" } },
    meals: "breakfast",
    dates: {
      start: "2023-01-24",
      end: "2023-01-28",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-04",
  },
  {
    _id: "2",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a2",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "2004", number: 2004, roomType: { _id: "superior", type: "superior" } },
    meals: "breakfast",
    dates: {
      start: "2023-03-01",
      end: "2023-03-05",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-05",
  },
  {
    _id: "3",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a1",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "2004", number: 2004, roomType: { _id: "superior", type: "superior" } },
    meals: "breakfast",
    dates: {
      start: "2023-03-08",
      end: "2023-03-10",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-06",
  },
  {
    _id: "1",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a1",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "2008", number: 2008, roomType: { _id: "signature", type: "signature" } },
    meals: "breakfast",
    dates: {
      start: "2023-03-01",
      end: "2023-03-05",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-07",
  },
  {
    _id: "2",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a2",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "2008", number: 2008, roomType: { _id: "signature", type: "signature" } },
    meals: "breakfast",
    dates: {
      start: "2023-04-01",
      end: "2023-04-02",
    },
    payment: {
      isPaid: true,
      amount: 125,
      method: "online",
    },
    createdAt: "2023-02-08",
  },
  {
    _id: "3",
    guest: {
      _id: "60e295f6f3d25b4b4026bd5a2",
      name: "Ahmed Rezk",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      passport: "12345678",
    },
    unit: { _id: "2008", number: 2008, roomType: { _id: "signature", type: "signature" } },
    meals: "breakfast",
    dates: {
      start: "2023-04-04",
      end: "2023-04-05",
    },
    payment: {
      isPaid: false,
      amount: 125,
      method: "cash",
    },
    createdAt: "2023-02-09",
  },
];

type Reservations = {
  [key: number]: Reservation[];
};

export const reservationsEntities: Reservations = {
  1004: [
    {
      _id: "1",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a1",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "1004", number: 1004, roomType: { _id: "superior", type: "superior" } },
      meals: "breakfast",
      dates: {
        start: "2023-01-24",
        end: "2023-01-28",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-01",
    },
    {
      _id: "2",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a2",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "1004", number: 1004, roomType: { _id: "superior", type: "superior" } },
      meals: "breakfast",
      dates: {
        start: "2023-03-01",
        end: "2023-03-05",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-02",
    },
    {
      _id: "3",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a1",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "1004", number: 1004, roomType: { _id: "superior", type: "superior" } },
      meals: "breakfast",
      dates: {
        start: "2023-03-08",
        end: "2023-03-10",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-03",
    },
  ],
  2004: [
    {
      _id: "1",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a1",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "2004", number: 2004, roomType: { _id: "superior", type: "superior" } },
      meals: "breakfast",
      dates: {
        start: "2023-01-24",
        end: "2023-01-28",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-04",
    },
    {
      _id: "2",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a2",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "2004", number: 2004, roomType: { _id: "superior", type: "superior" } },
      meals: "breakfast",
      dates: {
        start: "2023-03-01",
        end: "2023-03-05",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-05",
    },
    {
      _id: "3",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a1",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "2004", number: 2004, roomType: { _id: "superior", type: "superior" } },
      meals: "breakfast",
      dates: {
        start: "2023-03-08",
        end: "2023-03-10",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-06",
    },
  ],
  2008: [
    {
      _id: "1",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a1",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "2008", number: 2008, roomType: { _id: "signature", type: "signature" } },
      meals: "breakfast",
      dates: {
        start: "2023-03-01",
        end: "2023-03-05",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-07",
    },
    {
      _id: "2",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a2",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "2008", number: 2008, roomType: { _id: "signature", type: "signature" } },
      meals: "breakfast",
      dates: {
        start: "2023-04-01",
        end: "2023-04-02",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
      createdAt: "2023-02-08",
    },
    {
      _id: "3",
      guest: {
        _id: "60e295f6f3d25b4b4026bd5a2",
        name: "Ahmed Rezk",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        passport: "12345678",
      },
      unit: { _id: "2008", number: 2008, roomType: { _id: "signature", type: "signature" } },
      meals: "breakfast",
      dates: {
        start: "2023-04-04",
        end: "2023-04-05",
      },
      payment: {
        isPaid: false,
        amount: 125,
        method: "cash",
      },
      createdAt: "2023-02-09",
    },
  ],
};
