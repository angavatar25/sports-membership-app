import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import ClassCard from '@/components/Cards/ClassCard'
import Input from '@/components/Input/InputWithIcon'
import Typography from '@/components/Typography'
import { EnumTypography } from '@/enum/EnumTypography'
import { EnumButton } from '@/enum/EnumButton'
import Button from '@/components/Button'
import useNavigation from '@/hooks/useNavigate'
import useHandleClass from '@/hooks/useHandleClass';

const ClassList = () => {
  const { redirectToPage, getQueryParams } = useNavigation();
  const { classlist, getClassList } = useHandleClass();

  const isTournamentsKey = getQueryParams().get("isTournament");

  useEffect(() => {
    if (classlist.length === 0) {
      getClassList();
    }
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between pt-32 pb-20'>
        <div>
          <Typography
            className='mb-2'
            variant={EnumTypography.h1}
          >
            {isTournamentsKey ? "Tournaments List" : "Class List"}
          </Typography>
          <Typography variant={EnumTypography.body}>
            {isTournamentsKey ?
              "Compete on tournament and set your groundstrokes"
              : "Choose your suitable class schedule"
            }
          </Typography>
        </div>
        <div className='my-auto'>
          <Input/>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {classlist.length > 0 && classlist.map((data) => (
          <ClassCard
            onClick={() => redirectToPage(`/class-detail/${data.id}`)}
            key={`class-${data.eventName}`}
            data={data}
          />
        ))}
      </div>
      <div className='flex justify-center my-10'>
        <Button
          text="Show More"
          isWithIcon={true}
          icon={<ArrowRight size={14} />}
          type={EnumButton.SECONDARY}
        />
      </div>
    </div>
  )
}

export default ClassList