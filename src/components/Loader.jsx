import {Html, useProgress} from "@react-three/drei";


const Loader = () => {
    const {progress} = useProgress();
  return (<Html center className="font-bold text-8xl text-center"> {progress} %Loaded </Html>
    
  )
};

export default Loader;
