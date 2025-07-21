import { EnumButton } from "../../enum/EnumButton"
import Button from "../Button"

const ClassDetailCard = () => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-3xl shadow-md text-[#153850] space-y-4">
      <h2 className="text-2xl font-medium">Beginner</h2>

      <div>
        <p className="text-sm font-semibold text-[#ff6a6a] mb-3">DATE & TIME</p>
        <p className="text-base">20 January 2026</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#ff6a6a] mb-3">LOCATION</p>
        <p className="text-base">
          Vip Tennis 1 And 2, Ultra Dome Padel And Tennis Courts Kota Jakarta Utara,
          Daerah Khusus Ibukota Jakarta
        </p>
      </div>

      <hr className="border-t border-gray-200" />

      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Rp.150.000</p>
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