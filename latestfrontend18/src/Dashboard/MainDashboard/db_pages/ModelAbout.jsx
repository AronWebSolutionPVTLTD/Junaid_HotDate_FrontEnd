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
                <span className="block">Member Since:</span>
                <span className="block text-right">{formattedDate}</span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Sexual Orientation:</span>
                <span className="block text-right">
                  {modelData.sexual_orientation}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Looking For:</span>
                <span className="block text-right">
                  {modelData.looking_for}
                </span>
              </p>
            </div>
            <div className="grid gap-y-2">
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Name:</span>
                <span className="block text-right">
                  <pre>
                    {modelData.firstName} {modelData.lastName}
                  </pre>
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Email:</span>
                <span className="block text-right">{modelData.email}</span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Birthdate:</span>
                <span className="block text-right">{modelData.DOB}</span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Marital Status:</span>
                <span className="block text-right">
                  {modelData.marital_status}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Body Type:</span>
                <span className="block text-right">{modelData.body_type}</span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Booking Price:</span>
                <span className="block text-right">
                  {modelData.booking_price}
                </span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Race:</span>
                <span className="block text-right">{modelData.race}</span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Age:</span>
                <span className="block text-right">{modelData.age}</span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Language:</span>
                <span className="block text-right">{modelData.language}</span>
              </p>
              <p className="text-sm sm:text-lg grid grid-cols-2 gap-3">
                <span className="block">Introduction:</span>
                <span className="block text-right">
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
