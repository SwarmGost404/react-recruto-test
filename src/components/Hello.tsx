import { useSearchParams } from "react-router";

function Hello() {

  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || 'Recruto';
  const message = searchParams.get('message') || 'Давай дружить';
  
  return (
    <>
        <div>
            <h1 style={{textAlign: "center"}}>Hello {name}! {message}!</h1>
        </div>
    </>
  )

}
export default Hello