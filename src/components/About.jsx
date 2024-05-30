const About = () => {
  return (
    <div className="m-lg-5 p-lg-5 mx-4 my-5 p-1">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="h2"> درباره خوان</h2>
          <div style={{ fontSize: "0.8rem" }}>
            <p>
              {" "}
              خوان یه وب اپلیکیشن هست برای مدیریت اطلاعات مربوط به کتابایی که
              داری یا میخوای بدونی و بخونی. میتونی اطلاعات اون رو ویرایش کنی یا
              کم و زیادش کنی. این وب اپلیکیشن با فناوری React و به صورت SPA
              طراحی شده و بسیار سریع و دقیقه. اینجا یه سری لینک های مفید براتون
              قرار میدم که اگه دوست داشتین بهشون یه سری بزنید.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.figma.com/file/zkrulDtbQMrM3y02BjDGkD/Arash---Khan?type=design&node-id=34%3A1787&mode=dev"
                  target="_blank"
                >
                  رابط کاربری خوان در فیگما
                </a>
              </li>
              <li>
                <a href="jobvision.ir/cv/42791655-183112" target="_blank">
                  رزومه من
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arash-bahmani-bb711a23a"
                  target="_blank"
                >
                  صفحه من در لینکدین{" "}
                </a>
              </li>
              <li>
                <a href="https://github.com/arashbahmani" target="_blank">
                  صفحه گیت هاب من{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            src="https://m.media-amazon.com/images/I/71-u55M8jYL.jpg"
            alt="کار گروهی"
            width="100%"
            className="img-fluid rounded-9 shadow-2-strong"
          />
          <img
            src="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg"
            alt="کار گروهی"
            width="35%"
            className="img-fluid rounded-9 position-absolute"
            style={{
              top: "320px",
              left: "8vw",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
