import { useState } from "react";

import { supabase } from "../supabase-client";
import { useClassStore } from "../store/useClassStore";
import { EnumTable } from "../enum/EnumTable";
import { FormatClassDate } from "../helper/DateFormat";

const useHandleClass = () => {
  const [activeProfileTab, setActiveProfileTab] = useState('private');

  const classlist = useClassStore((state) => state.classList);
  const classDetail = useClassStore((state) => state.classDetail);

  const setClassList = useClassStore((state) => state.setClassList);
  const setClassDetail = useClassStore((state) => state.setClassDetail);

  const handleActiveProfileTab = (tab: string) => {
    setActiveProfileTab(tab);
  }

  const getClassList = async () => {
    const { data } = await supabase
      .from(EnumTable.ClassList)
      .select('*');

    if (data) {
      setClassList(data || [])
    }
  }

  const getClassDetail = async (id: string | number) => {
    const { data } = await supabase
      .from(EnumTable.ClassList)
      .select('*')
      .eq('id', id)
      .single();

    const datePayload = {
      date: data.date,
      start_time: data.start_time,
      end_time: data.end_time,
    };

    const formatted = {
      ...data,
      time: FormatClassDate(datePayload),
    }

    if (data) {
      setClassDetail(formatted)
    }
  }

  return {
    classlist,
    classDetail,
    activeProfileTab,
    getClassList,
    getClassDetail,
    handleActiveProfileTab,
  };
}

export default useHandleClass;