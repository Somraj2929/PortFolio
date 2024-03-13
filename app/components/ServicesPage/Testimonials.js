const Testimonials = () => {
  const testinomials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO at Company",
      image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    },
    {
      id: 2,
      name: "John Doe",
      title: "CEO at Company",
      image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    },
    {
      id: 3,
      name: "John Doe",
      title: "CEO at Company",
      image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    },
    {
      id: 4,
      name: "John Doe",
      title: "CEO at Company",
      image: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    },
    {
      id: 5,
      name: "John Doe",
      title: "CEO at Company",
      image: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    },
    {
      id: 6,
      name: "John Doe",
      title: "CEO at Company",
      image: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    },
  ];
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center p-2">
          {testinomials.map((testimonial) => (
            <div className="w-[24rem] px-4 mb-8" key={testimonial.id}>
              <div className="bg-red-200 p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
