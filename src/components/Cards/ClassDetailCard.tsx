import { EnumButton } from "@/enum/EnumButton"
import { TypeClassDetailCard } from "@/interface/classInterface"
import Button from "@/components/Button"

const ClassDetailCard = (props: TypeClassDetailCard) => {
  const { data } = props;
  return (
    <div className="max-w-sm p-6 bg-white rounded-3xl shadow-md text-[#153850] space-y-4">
      <h2 className="text-2xl font-medium">
        {data.level}
      </h2>

      <div>
        <p className="text-sm font-semibold text-[#ff6a6a] mb-3">DATE & TIME</p>
        <p className="text-base">
          {data.time}
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#ff6a6a] mb-3">LOCATION</p>
        <p className="text-base">
          {data.address}
        </p>
      </div>

      <hr className="border-t border-gray-200" />

      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">
          {data.price}
        </p>
        <Button
          text="Join Class"
          type={EnumButton.PRIMARY}
          isWithIcon={false}
        />
      </div>
    </div>
  )
}

export default ClassDetailCard