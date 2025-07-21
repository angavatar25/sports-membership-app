export type TypeClass = {
  level: string;
  date: string;
  eventName: string;
  location: string;
  joinedCount: number;
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

export type EventCardProps = TypeClassWithImage | TypeClassWithoutImage;