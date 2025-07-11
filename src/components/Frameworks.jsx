import { OrbitingCircles } from "./OrbitingCircles";


export function Frameworks() {
const skills = ["auth0", "java", "javascript", "git", "react", "sqlite", "vitejs", "html5"];


return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill,index)=>(<Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
         {skills.reverse().map((skill,index)=>(<Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({src})=>{
return <img src ={src} className="rounded-sm hover:scale-110"/>}

