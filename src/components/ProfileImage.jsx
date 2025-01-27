export default function ProfileImage({ isOpen }) {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <div className="flex items-center justify-center h-[44px] w-[44px] border-2 border-slate-700 rounded-full">
          <p className="font-semibold text-lg">X</p>
        </div>
      </div>
      {isOpen ? (
        <div>
          <div className="flex flex-col text-sm">
            <span>XXXXXxxxxxxxxxxxxxxsssssssssssssssssssssssE</span>
            <span>dd</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
