import React, { useEffect, useState } from 'react';
import { Theme } from '../components/Theme';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import img1 from '../assets/gallery/i1.jpg' 
import img2 from '../assets/gallery/i2.jpg'
import img3 from '../assets/gallery/i3.jpg'
import img4 from '../assets/gallery/i4.jpg'
import img5 from '../assets/gallery/i5.jpg'
import img6 from '../assets/gallery/i6.jpg'
import img7 from '../assets/gallery/i7.jpg'
import img8 from '../assets/gallery/i8.jpeg'
import img9 from '../assets/gallery/i9.jpg'
import img10 from '../assets/gallery/i10.jpeg'
import img11 from '../assets/gallery/i11.jpeg'
import img12 from '../assets/gallery/i12.jpeg'
import img13 from '../assets/gallery/i13.jpg'
import img14 from '../assets/gallery/i14.jpg'
import img15 from '../assets/gallery/i15.jpeg'
import img16 from '../assets/gallery/i16.jpg'
import img17 from '../assets/gallery/i17.jpg'
import img18 from '../assets/gallery/i18.jpg'
import img19 from '../assets/gallery/i19.jpg'

export const Gallery = () => {

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userVisit, setUserVisit] = useState('')

  useEffect(() => {
    if (!user) {
      navigate("/auth", { replace: true });
    }
  });

  useEffect(() => {
    const handleBackButton = () => {
      handleLogout(); // Auto logout on back button
    };

    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth", { replace: true });
  }

  useEffect(() => {
    if (user) {
      visitGallery(user.id);
    }
  }, [user]);

  const visitGallery = () => {
    const visitData = JSON.parse(localStorage.getItem("userVisits")) || {};
    visitData[user.name] = (visitData[user.name] || 0) + 1;
    localStorage.setItem("userVisits", JSON.stringify(visitData));
    console.log(`Welcome ${user.name}, you have visited ${visitData[user.name]} times`);
  }

  const [selectedImage, setSelectedImage] = useState(null);


  const handleOpenImg = (img) => {
    setSelectedImage(img);
  }

  const handleCloseImg = () => {
    setSelectedImage(null)
  }

  const imageGallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]

  // const imageGallery = [
  //   "https://www.shutterstock.com/image-photo/blond-hair-girl-taking-photo-260nw-2492842415.jpg",
  //   "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
  //   "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  //   "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-2181662163.jpg",
  //   "https://burst.shopifycdn.com/photos/person-stands-on-rocks-poking-out-of-the-ocean-shoreline.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  //   "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  //   "https://t3.ftcdn.net/jpg/02/73/22/74/360_F_273227473_N0WRQuX3uZCJJxlHKYZF44uaJAkh2xLG.jpg",
  //   "https://cdn.pixabay.com/photo/2018/05/13/20/21/lake-3397784_1280.jpg",
  //   "https://ipt.images.tshiftcdn.com/206026/x/0/how-to-use-a-wide-angle-lens-for-photography-8.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883",
  //   "https://www.postergully.com/cdn/shop/products/2_2_d27a932d-0f43-4dce-9325-5ad60d67aedf.jpg?v=1578634005",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv_HdGiGN0uxi4TAjzhAx3x6vKIjuFBTMD98UadcEhMW5I4FkCVkdo-z69ALj6M5m8pE&usqp=CAU",
  //   "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
  //   "https://www.sony.net/Products/di_photo-gallery/images/extralarge/2274.JPG",
  //   "https://www.cameraegg.org/wp-content/uploads/2013/02/Leica-M-Sample-Image.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDgESn9S9Yj8sHdE531aTyhWUjefuTOqAAw&s",
  //   "https://kenkoimagingusa.com/cdn/shop/articles/How_to_Increase_the_Wow_Factor_of_Wide-Angle_Landscape_Photography.jpg?v=1568752986",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY38rA8NbJWULSqoyP9oxOyPBmxaYskIp6_w&s",
  //   "https://m.media-amazon.com/images/I/71xT4AHMAZL.jpg",
  //   "https://4kwallpapers.com/images/walls/thumbs/16906.png",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5moNcCFr8odTEr3exZ93YfKKHaiQQZn67Okk5WOC97afAjcn6kjxOvQzkJFybFDYtVU&usqp=CAU",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjEjHx9_qUU3KeHNPbDfpoX71GLZ39EhBbQ&s",
  //   "https://i.pinimg.com/736x/17/21/68/1721687f42c048ec4c1a99fad73c5685.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLJ_i6Q-baqlpp8nrZ1rUqWbZBeKCemTHRQ&s",

  // ]


  return (
    <>
      {
        user && (
          <div className='w-full'>

            <header className='flex justify-between items-center p-3 bg-gray-800 text-white'>
              <h2 className='text-4xl'>Gallery</h2>
              <Theme />
            </header>

            <div className='flex flex-col items-center my-5 gap-2'>
              <p className='text-2xl'>Hello !</p>
              <p className='text-2xl font-bold'>{user?.name}</p>
              <p className='text-xl'>Welcome to the Gallery</p>
              <button onClick={handleLogout} className='bg-red-500 text-white px-4 py-1.5 rounded-md my-2'>Logout</button>
            </div>
           

            <div className='grid grid-cols-3 gap-2 mx-2 mb-3'>
              {
                imageGallery.map((image, index) => (
                  <div

                    key={index}
                    image={image}
                    onClick={() => handleOpenImg(image)}
                    className='overflow-hidden rounded-md shadow-md hover:shadow-lg duration-500 w-full h-36'>

                    <img src={image} alt={`gallery image ${index + 1}`}

                      className='w-full h-full object-cover hover:scale-110 duration-500' />

                  </div>
                ))
              }
            </div>


            {
              selectedImage && (
                <div className="modal" onClick={handleCloseImg}>
                  <span className="close">&times;</span>
                  <img className="modal-content" src={selectedImage} alt="Full Screen" />
                </div>
              )
            }

          </div>
        )
      }

    </>
  )
}
