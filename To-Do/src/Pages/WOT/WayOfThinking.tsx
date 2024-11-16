import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import WotPlus from "../../Components/WOTPlusComponent/WotPlus";
import { PostOne } from "../../http/WayOfThinkingHttp/PostOne";
import { getAll } from "../../http/WayOfThinkingHttp/GetAll";
import WayOfThinkingLines from "../../Components/WOTShowComponents/WayOfThinkingLines";
import { GetAllType } from "../../type/WayOfThinking-Type/GetResponseType";

function WayOfThinking() {
  
  const client = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: PostOne,
    onSuccess : ()=>{
      console.log('refresh')
      client.invalidateQueries({queryKey : ['wot-all']});
    }
  });

  const { data, isError, error, isLoading } = useQuery<GetAllType, Error>({
    queryKey: ["wot-all"],
    queryFn: () => getAll(),
    staleTime : 10 * 60 * 1000
  });

  if (isError) {
    console.log(error);
    return <div>Error...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <WotPlus mutate={mutate}></WotPlus>
        <WayOfThinkingLines data={data?.data || []}></WayOfThinkingLines>
      </div>
    </>
  );
}

export default WayOfThinking;
