function ModelAbout({ modelData }) {
  const formattedDate = new Date(modelData.createdAt).toLocaleDateString(
    "en-GB"
  );
  console.log(modelData, "model");
  return (
    <>
      <div className="pt-10 pb-10 container px-5  mx-auto">
        <div className="bg-black-20 rounded-lg py-10 px-3 lg:px-8 items-start">
          <div className="p-5 bg-black-20 rounded-2xl">
            <div className="flex justify-between gap-3 font-normal pb-3 mb-3 border-b border-orange">
              <p className="text-base sm:text-2xl">Details</p>
            </div>
            <div className="grid gap-y-2 pb-3 mb-3 border-b border-orange">
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Member Since:</span>
                <span className="block text-right font-body_font">
                  {formattedDate}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">
                  Sexual Orientation:
                </span>
                <span className="block text-right font-body_font">
                  {modelData.sexual_orientation}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font ">Looking For:</span>
                <span className="block text-right font-body_font">
                  {modelData.looking_for}
                </span>
              </p>
            </div>
            <div className="grid gap-y-2">
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Name:</span>
                <span className="block text-right font-body_font">
                  {modelData.firstName} {modelData.lastName}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Email:</span>
                <span className="block text-right font-body_font">
                  {modelData.email}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Birthdate:</span>
                <span className="block text-right font-body_font">
                  {modelData.DOB}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Marital Status:</span>
                <span className="block text-right font-body_font">
                  {modelData.marital_status}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Body Type:</span>
                <span className="block text-right font-body_font">
                  {modelData.body_type}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Booking Price:</span>
                <span className="block text-right font-body_font">
                  {modelData.booking_price}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Race:</span>
                <span className="block text-right font-body_font">
                  {modelData.race}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Age:</span>
                <span className="block text-right font-body_font">
                  {modelData.age}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Language:</span>
                <span className="block text-right font-body_font">
                  {modelData.language}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block font-body_font">Introduction:</span>
                <span className="block text-right font-body_font">
                  {modelData.introduction}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModelAbout;
