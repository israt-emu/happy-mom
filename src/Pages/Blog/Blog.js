import React from "react";
import img1 from "../../images/blog-1.jpg";
import img2 from "../../images/blog-2.jpg";
import img3 from "../../images/blog-3.jpg";

const Blog = () => {
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-4xl font-bold text-center">Our Blogs</h1>
        <div className="mx-auto md:w-4/5 w-11/12 mt-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="shadow-lg py-5 px-4 px-md-0">
              <div>
                <img src={img1} alt="" className="mx-auto" />
              </div>

              <h1 className="text-2xl font-bold my-3">
                Safe Pregnancy and Child Birth
              </h1>
              <p>
                Before you can take care of your new baby, you need to take care
                of yourself and your unborn child. There’s a lot of advice out
                there.Such as Take a prenatal vitamin, Exercise regularly, Write
                a birth plan, Educate yourself..
              </p>
              <p className="text-purple-500">Read More</p>
            </div>
            <div className="shadow-lg py-5 px-4 px-md-0">
              <div>
                <img src={img2} alt="" className="mx-auto" />
              </div>
              <h1 className="text-2xl font-bold my-3">
                11 Foods and Beverages to Avoid During Pregnancy
              </h1>
              <p>
                One of the first things people learn when they’re pregnant is
                what they can’t eat. It can be a real bummer if you’re a big
                sushi, coffee, or rare steak fan. Thankfully, there’s more you
                can eat than what you can’t...
              </p>
              <p className="text-purple-500">Read More</p>
            </div>
            <div className="shadow-lg py-5 px-4 px-md-0">
              <div>
                <img src={img3} alt="" className="mx-auto" />
              </div>

              <h1 className="text-2xl font-bold my-3">
                Early Pregnancy Symptoms
              </h1>
              <p>
                Though it may sound odd, your first week of pregnancy is based
                on the date of your last menstrual period. Your last menstrual
                period is considered week 1 of pregnancy, even if you weren’t
                actually pregnant yet...
              </p>
              <p className="text-purple-500">Read More</p>
            </div>
          </div>
          <button className="px-3 py-2 rounded button text-white my-4">
            More Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
