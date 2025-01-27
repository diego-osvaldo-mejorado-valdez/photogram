import ProfileImage from "../components/ProfileImage.jsx";

export default function ProfilesList({isOpen}) {
  return (

      <div className="flex flex-col py-2 w-full space-y-2 justify-start">
        <ProfileImage isOpen ={isOpen}/>
        <ProfileImage isOpen ={isOpen}/>
        <ProfileImage isOpen ={isOpen}/>
        <ProfileImage isOpen ={isOpen}/>
        <ProfileImage isOpen ={isOpen}/>
        
      
      </div>
  );
}
