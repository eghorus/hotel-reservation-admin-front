export type Reservation = {
  _id: string;
  guest: { _id: string; name: string };
  unitId: number;
  passport: string;
  meals: "breakfast" | "lunch" | "all";
  smoking: boolean;
  dates: {
    start: string;
    end: string;
  };
  payment: {
    isPaid: boolean;
    amount: number;
    method: "online" | "cash";
  };
};

type Reservations = {
  [key: number]: Reservation[];
};

const reservations: Reservations = {
  1004: [
    {
      _id: "1",
      guest: { _id: "60e295f6f3d25b4b4026bd5a1", name: "Ahmed Rezk" },
      unitId: 1004,
      passport: "12345678",
      meals: "breakfast",
      smoking: false,
      dates: {
        start: "18/01/2023",
        end: "22/01/2023",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
    },
    {
      _id: "2",
      guest: { _id: "60e295f6f3d25b4b4026bd5a2", name: "Ahmed Rezk" },
      unitId: 1004,
      passport: "12345678",
      meals: "breakfast",
      smoking: false,
      dates: {
        start: "22/01/2023",
        end: "28/01/2023",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
    },
  ],
  2008: [
    {
      _id: "1",
      guest: { _id: "60e295f6f3d25b4b4026bd5a1", name: "Ahmed Rezk" },
      unitId: 2008,
      passport: "12345678",
      meals: "breakfast",
      smoking: false,
      dates: {
        start: "01/03/2023",
        end: "04/03/2023",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
    },
    {
      _id: "2",
      guest: { _id: "60e295f6f3d25b4b4026bd5a2", name: "Ahmed Rezk" },
      unitId: 2008,
      passport: "12345678",
      meals: "breakfast",
      smoking: false,
      dates: {
        start: "05/03/2023",
        end: "07/03/2023",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
    },
    {
      _id: "3",
      guest: { _id: "60e295f6f3d25b4b4026bd5a2", name: "Ahmed Rezk" },
      unitId: 2008,
      passport: "12345678",
      meals: "breakfast",
      smoking: false,
      dates: {
        start: "07/03/2023",
        end: "09/03/2023",
      },
      payment: {
        isPaid: true,
        amount: 125,
        method: "online",
      },
    },
  ],
};

export default reservations;
