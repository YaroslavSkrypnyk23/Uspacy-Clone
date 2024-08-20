import {hiddenContent} from "../constants";

const Content = () => {
  const data = hiddenContent[0];

  return (
    <div className='bg-black w-full h-[300px] absolute top-[106px] left-0 right-0'>
      <div className='max-w-[100rem] m-auto'>
        <div></div>
      </div>
    </div>
  )
}

export default Content