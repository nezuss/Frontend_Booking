// ? Components
import { Button } from "@/components/ui/button";

export function Reservations() {
  return (
    <div>
      <h1 className="text-4xl mb-4">My Reservations</h1>
      <div className="flex flex-col gap-y-4">
        <Reservation
          id={2341}
          checkIn={"fsgdfg"}
          checkOut={"sdgdfgsdgd"}
          guests={5123}
          status={"sfgsdgdfgsd"}
          roomName={"fgsdfgsdfgsdfg"}
          rootType={"sdfgdfggf"}
        />
        <Reservation
          id={2341}
          checkIn={"fsgdfg"}
          checkOut={"sdgdfgsdgd"}
          guests={5123}
          status={"sfgsdgdfgsd"}
          roomName={"fgsdfgsdfgsdfg"}
          rootType={"sdfgdfggf"}
          onDelete={() => {}}
        />
        <Reservation
          id={2341}
          checkIn={"fsgdfg"}
          checkOut={"sdgdfgsdgd"}
          guests={5123}
          status={"sfgsdgdfgsd"}
          roomName={"fgsdfgsdfgsdfg"}
          rootType={"sdfgdfggf"}
        />
      </div>
    </div>
  );
}

const Reservation = ({
  id,
  checkIn,
  checkOut,
  guests,
  status,
  roomName,
  rootType,
  onDelete,
}: {
  id: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: string;
  roomName: string;
  rootType: string;
  onDelete?: () => void;
}) => {
  return (
    <div
      key={id}
      className="h-56 relative flex flex-col justify-between border rounded-xl p-4"
    >
      <div className="space-y-1">
        <h2 className="text-3xl">{roomName}</h2>
        <p className="text-sm">{rootType}</p>
      </div>
      <div className="space-y-4">
        <div className="border-l-2 border-primary pl-2">
          <div>{guests} guests</div>
          <div className="space-y-2">
            Dates: {checkIn} - {checkOut}
          </div>
        </div>
        <Button variant="destructive" onClick={onDelete}>
          Cancel
        </Button>
      </div>
      <div className="absolute bg-primary text-background right-2 top-2 px-2 py-1 rounded-lg">
        {status}
      </div>
    </div>
  );
};
