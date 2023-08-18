function ModelPhotoVideo({ modelData }) {
  return (
    <>
      <div className="bg-black sm:pt-8 py-8 px-6 rounded-2xl xl:rounded-r-none min-h-full">
        <div className="xl:w-11/12">
          <div className="grid gap-2 sm:gap-5 grid-cols-2 mb-10">
            {modelData.images?.map((el, i) => (
              <div className="relative rounded-2xl" key={i}>
                <img
                  src={el}
                  alt="model-img.png"
                  className="w-full aspect-4/3 object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5">
            {modelData.videos?.map((el, i) => (
              <div className="relative rounded-2xl group ease-in duration-300">
                <video controls>
                  <source src={el} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ModelPhotoVideo;
