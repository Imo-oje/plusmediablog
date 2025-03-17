import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PostView = () => {
  return (
    <>
      <Navbar />
      <main className="px-[24px] my-10">
        <div className="flex flex-col gap-2 md:gap-6 md:grid md:grid-cols-10 w-full h-full lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-between md:flex-1 md:w-auto col-span-5 2xl">
            <div className="flex flex-col gap-2">
              <Link
                to="*"
                className="text-lg font-bold font-mono hover:underline"
              >
                Ethan Caldwell on September 29, 2024
              </Link>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-2">
                The Future of Work: Tech and Remote Trends
              </h1>
              <p className="hidden lg:block text-lg leading-6 font-medium max-w-[450px]">
                Find out why 2024 is predicted to be a pivotal year for sports
                technology and its impact on the industry.
              </p>
            </div>
            <div className="flex items-center gap-6 my-4 md:mb-0">
              <Button>Sport</Button>
              <Button>Travel</Button>
            </div>
          </div>
          <picture className="relative w-fit block col-span-5">
            <img
              src="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured image"
              className="h-full object-cover rounded-2xl md:w-[500px] lg:w-[600px]"
              decoding="async"
              fetchPriority="high"
              srcSet="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              sizes="(max-width:1248px), 100vw, 1248px"
            />
            {/* Image Overlay */}
            <Link
              to="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="!absolute inset-0 z-10 block w-fit group"
            >
              <div className="flex justify-between items-center p-6  w-fit opacity-70">
                <div>
                  <Button className="hidden group-hover:block">
                    6 Min Read
                  </Button>
                </div>
              </div>
            </Link>
          </picture>
        </div>{" "}
        <hr className="mx-auto w-4/5 my-6 lg:hidden" />
        <div className="grid md:grid-cols-10 md:mt-8 gap-8">
          <div className="hidden md:block md:col-span-2 lg:col-span-1">
            left
          </div>
          <article className="md:col-span-8 text-left lg:col-span-6 text-lg font-medi">
            {/* Post body here */}center Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Iusto quaerat labore, et nostrum aperiam
            perferendis ipsa nihil voluptates vero illum consectetur non
            repudiandae recusandae Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet voluptatem quaerat veritatis ut,
            temporibus sit nesciunt dolore! Ullam velit perferendis totam nemo
            debitis quis quas reiciendis hic soluta. Ut, id. Maxime assumenda
            quis quam dicta eaque ipsam ad odit repellendus quod ducimus
            tenetur, rerum nobis, atque explicabo sequi iure numquam, ratione
            expedita consectetur! Atque, modi sequi laborum temporibus pariatur
            minus? Dignissimos excepturi ratione, Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio tempore repellat
            consequuntur nostrum beatae qui, optio perspiciatis nobis odio dicta
            ipsam repellendus aliquid velit voluptates exercitationem rerum
            ipsum eum cumque. Vel quibusdam quae rem molestias, dolore nam
            commodi natus velit quo maiores cumque impedit modi incidunt sequi
            officiis est, pariatur architecto? Tempore magni cumque, omnis
            quisquam a nesciunt quas voluptates? Omnis necessitatibus alias sed
            in ut totam nam maiores mollitia quod repellat veniam, porro est
            cupiditate incidunt dolorem delectus exercitationem. Porro nulla
            eligendi dicta repudiandae exercitationem. Deleniti doloremque
            assumenda alias. Unde atque illum inventore ad ipsa, dignissimos
            voluptatem ipsam aut hic aliquid consectetur vel natus asperiores
            corporis? Veniam ex iste quidem optio rerum aliquid, autem porro
            aperiam, nobis est libero. Magnam vel reprehenderit saepe corporis
            atque molestias alias amet. Harum illum odio esse culpa quisquam.
            Laborum voluptas ipsam molestiae fuga consequuntur similique,
            aliquid et laboriosam nihil, quos dicta saepe accusantium. eum
            veniam voluptatem amet labore enim aperiam, corrupti et perferendis
            atque explicabo expedita illum repellat mollitia animi cum a
            laudantium molestias dolore earum nulla sed. Odio, vero. aspernatur,
            quas molestias commodi nulla ullam?
          </article>
          <div className="md:col-span-10 lg:col-span-3">
            <div className="p-4 flex flex-col gap-2">
              <div className="font-semibold">ABOUT</div>
              <div className="flex justify-start gap-3">
                <img
                  src="https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile Image"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">Ethan Caldwell</h3>
                  <p className="font-semibold leading-3 text-[15px]">
                    Reflective Blogger
                  </p>
                </div>
              </div>
              <p className="text-left font-semibold text-[15px]">
                Ethan Caldwell shares thoughtful insights and reflections on
                life, culture, and personal growth. His work explores the
                intersections of creativity and experience, offering readers
                unique perspectives.
              </p>
              <div className="flex gap-3">
                <div className="w-6">
                  <Link to="*">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>X</title>
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </Link>
                </div>
                <div className="w-6">
                  <Link to="*">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
                  </Link>
                </div>
                <div className="w-6">
                  <Link to="*">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostView;
