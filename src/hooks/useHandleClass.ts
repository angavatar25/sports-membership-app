import { useEffect, useState } from "react"
import { supabase } from "../supabase-client";
import type { TypeClass } from "../interface/classInterface";

const useHandleClass = () => {
  const [classlist, setClasslist] = useState<TypeClass[]>([]);

  const getClassList = async () => {
    const { data } = await supabase
      .from('classList')
      .select('*');

    if (data) {
      console.log(data);
      setClasslist(data || [])
    }
  }

  useEffect(() => {
    getClassList()
  }, []);

  return { classlist };
}

export default useHandleClass;