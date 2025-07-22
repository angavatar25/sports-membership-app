export type TypeClass = {
  level: string;
  date: string;
  eventName: string;
  location: string;
  joinedCount: number;
  id: number | string;
};

export type TypeClassWithImage = {
  onClick: any;
  data: TypeClass & {
    isWithImage: true;
    imageUrl: string;
  };
};

export type TypeClassWithoutImage = {
  onClick: any;
  data: TypeClass & {
    isWithImage: false;
    imageUrl?: string;
  };
};

export type ClassDetailCard = {
  data: {
    level: string;
    time: string;
    address: string;
    price: number;
  }
}

export type EventCardProps = TypeClassWithImage | TypeClassWithoutImage;
