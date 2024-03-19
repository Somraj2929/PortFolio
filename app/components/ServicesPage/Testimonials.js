const Testimonials = () => {
  const testinomials = [
    {
      id: 1,
      name: "Nikhil Deore",
      title: "Web Developer",
      image:
        "https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/testimonials/nikhil.jpg",
      text: "Somraj having good skills in Web Dev using NextJS. His dedication to writing clean code and solving complex problems made him a valuable team member.",
    },
    {
      id: 2,
      name: "Arun Sharma",
      title: "Web Developer",
      image:
        "https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/testimonials/arun.jpg",
      text: "Somraj's expertise in backend using Golang was evident in our college project. His collaborative approach and proactive problem-solving skills were commendable.",
    },
    {
      id: 3,
      name: "Chirag Suthar",
      title: "Software Engineer",
      image:
        "https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/testimonials/chirag.jpg",
      text: "I worked with Somraj on a DevOps project during college. His knowledge of DevOps and cloud computing greatly contributed to optimizing our project's infrastructure.",
    },
    {
      id: 4,
      name: "Sanskriti Singh",
      title: "Business Development",
      image:
        "https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/testimonials/sanskriti.jpg",
      text: "Somraj's designs in UI/UX projects were impressive. His attention to detail and understanding of user needs resulted in engaging and intuitive designs.",
    },
    {
      id: 5,
      name: "Deep Singh Shekhawat",
      title: "Data Analyst & Marketing",
      image:
        "https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/testimonials/deep.jpg",
      text: "I worked with Somraj on database management projects. His expertise in MongoDB, SQL-based ensured efficient and scalable database solutions.",
    },
    {
      id: 6,
      name: "Simran Sinha",
      title: "Software Engineer",
      image:
        "https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/testimonials/simran.jpg",
      text: "Somraj showed a strong interest in cybersecurity. His knowledge of cybersecurity concepts and tools like Nessus and Wireshark was impressive.",
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
            <div className="w-[24rem]  px-4 mb-8" key={testimonial.id}>
              <div className="bg-homepage-gradient text-white p-6 rounded-lg shadow-lg">
                <p className=" mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-100">{testimonial.title}</p>
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
