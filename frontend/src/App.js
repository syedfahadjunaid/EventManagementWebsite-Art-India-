import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
// import DiwaliBrussels from "./Component/DiwaliBrussels/DiwaliBrussels";
import InfoPage from "./Component/InfoPage/InfoPage";
import OurSpacePage from "./Component/OurSpacePage/OurSpacePage";
import ContactUsPage from "./Component/ContactUsPage/ContactUsPage";
import AboutUsPage from "./Component/AboutUsPage/AboutUsPage";
import BlogPage from "./Component/BlogPage/BlogPage";
import SingleBlogPage from "./Component/SingleBlogPage/SingleBlogPage";
import BookNow from "./Component/BookNow/BookNow";
import BookNowThankYouPage from "./Component/BookNow/BookNowThankYouPage";
// import YogaFest from "./Component/YogaFest/YogaFest";
// import Rama from "./Component/Rama/Rama";
// import Taj from "./Component/Taj/Taj";
// import Performance from "./Component/Performance/Performance";
import GoToTop from "./GoToTop";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./Component/TermsAndCondition/TermsAndCondition";
// import Collaboration from "./Component/Collaboration/Collaboration";
// import Restaurants from "./Component/Restaurants/Restaurants";
// import MusicConservatory from "./Component/Music Conservatory/MusicConservatory";
import AdminHomePage from "./Admin/AdminPages/AdminHomePage/AdminHomePage";

import { CookiesProvider } from "react-cookie";

import Pages from "./Component/PAGES/Pages";
import Page404 from "./404";

import { getAllFAQs } from "./slice/faqSlice";

// import Api from "./api";

import {
  useGetBlogsQuery,
  // useGetBlogByIdQuery,
  // useCreateBlogMutation,
  // useUpdateBlogByIdMutation,
  // useDeleteBlogByIdMutation,
} from "./services/blog";
import {
  useGetAllAdminsQuery,
  // useDeleteAdminByIdMutation,
  // useCreateAdminMutation,
  // useAdminSignInMutation,
} from "./services/admin";

import {
  useGetWebsiteHeaderQuery,
  // useUpdateWebsiteHeaderMutation,
} from "./services/websiteHeader";
import {
  useGetSpacesQuery,
  // useCreateSpaceMutation,
  // useGetOneSpaceByIdQuery,
  // useDeleteSpaceByIdMutation,
  // useUpdateSpaceByIdMutation,
} from "./services/spaces";

import {
  useGetSectionTopDescriptionQuery,
  // useUpdateSectionTopDescriptionByIdMutation,
} from "./services/sectionTopDescription";

import {
  useGetCommunityQuery,
  // useCreateCommunityMutation,
  // useGetOneCommunityByIdQuery,
  // useDeleteCommunityByIdMutation,
  // useUpdateCommunityByIdMutation,
} from "./services/community";

import {
  useGetHeroSectionQuery,
  // useCreateHeroSectionMutation,
  // useUpdateHeroSectionByIdMutation,
  // useDeleteHeroSectionByIdMutation,
  // useGetOneHeroSectionByIdQuery,
} from "./services/heroSection";

import {
  useGetfooterQuery,
  // useUpdatefooterMutation
} from "./services/footer";

import {
  // useCreateContactMutation,
  // useDeleteContactByIdMutation,
  useGetContactsQuery,
  // useGetOneContactByIdQuery,
  // useUpdateContactByIdMutation,
} from "./services/contact";

import {
  // useCreateCategoryMutation,
  // useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
  // useGetCategoryByIdQuery,
  // useUpdateCategoryByIdMutation,
  // usePublishCategoriesByIdMutation,
} from "./services/categories";

import {
  useGetAboutUsQuery,
  // useUpdateAboutUsMutation,
} from "./services/aboutus";

import {
  // useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  // useUpdateVenueByIdMutation,
} from "./services/venues";

import {
  // useCreatePageMutation,
  useGetPagesQuery,
  // useGetOnePageByIdQuery,
  // useUpdatePageByIdMutation,
  // useUpdatePagePublishByIdMutation,
} from "./services/pages";

import {
  useGetAllSocialMediaQuery,
  // useUpdateSocialMediaByIdMutation,
  // useGetOneSocialMediaByIdQuery,
} from "./services/socialMedia";

import {
  // useCreateEventMutation,
  useGetEventsQuery,
  // useGetOneEventByIdQuery,
  // useUpdateEventByIdMutation,
} from "./services/events";

import {
  // useCreatePrivacyPolicyMutation,
  // useGetOnePrivacyPolicyByIdQuery,
  useGetPrivacyPolicyQuery,
  // useUpdatePrivacyPolicyByIdMutation,
} from "./services/privacyPolicy";

import {
  // useCreateTermsAndConditionsMutation,
  // useGetOneTermsAndConditionsByIdQuery,
  // useUpdateTermsAndConditionsByIdMutation,
  useGetTermsAndConditionsQuery,
} from "./services/termsAndConditions";

import {
  // useCreateEventSeatsMutation,
  // useGetEventSeatsByIdQuery,
  useGetEventSeatsQuery,
  // useUpdateEventSeatsByIdMutation,
} from "./services/eventSeats";

import {
  // useCreateOrderMutation,
  // useGetOrderByIdQuery,
  useGetOrdersQuery,
} from "./services/orders";

import { useEffect } from "react";

import AdminLogin from "./Admin/AdminPages/AdminLogin/AdminLogin";

import { useDispatch, useSelector } from "react-redux";

// import { updateDataChange } from "./slice/dataChangeSlice";
import { updateVenues } from "./slice/venuesSlice";

function App() {
  const { dataChange } = useSelector((state) => state.dataChangeState);

  const { faqs } = useSelector((state) => state.faqState);

  console.log(faqs);

  // console.log(dataChange);
  const dispatch = useDispatch();
  // console.log(dataChange);

  const responseGetAllAdmin = useGetAllAdminsQuery();
  const responseGetAllBlogs = useGetBlogsQuery();
  const responseGetWebsiteHeader = useGetWebsiteHeaderQuery();
  const responseGetSpaces = useGetSpacesQuery();
  const responseGetSectionTopDescription = useGetSectionTopDescriptionQuery();
  const responseGetCommunities = useGetCommunityQuery();
  const responseGetHeroSection = useGetHeroSectionQuery();
  const responseFooter = useGetfooterQuery();
  const responseContact = useGetContactsQuery();
  const responseCategories = useGetCategoriesQuery();
  const responseAboutUs = useGetAboutUsQuery();
  const responseVenues = useGetVenuesQuery();
  const responsePages = useGetPagesQuery();
  const responseSocialMedia = useGetAllSocialMediaQuery();
  const responseEvents = useGetEventsQuery();
  const responsePrivacyPolicy = useGetPrivacyPolicyQuery();
  const responseTermsAndConditions = useGetTermsAndConditionsQuery();
  const responseEventSeats = useGetEventSeatsQuery();
  const responseOrders = useGetOrdersQuery();

  // console.log(responseOrders);

  useEffect(() => {
    dispatch(updateVenues(responseVenues?.data));
  }, []);

  useEffect(() => {
    responseGetAllAdmin.refetch();
    responseAboutUs.refetch();
    responseCategories.refetch();
    responseGetAllBlogs.refetch();
    responseGetWebsiteHeader.refetch();
    responseGetSectionTopDescription.refetch();
    responseGetCommunities.refetch();
    responseGetHeroSection.refetch();
    responseFooter.refetch();
    responseContact.refetch();
    responseVenues.refetch();
    responsePages.refetch();
    responseSocialMedia.refetch();
    responseEvents.refetch();
    responseGetSpaces.refetch();
    responsePrivacyPolicy.refetch();
    responseTermsAndConditions.refetch();
    responseEventSeats.refetch();
  }, [dataChange]);

  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <BrowserRouter>
        {responseGetAllAdmin.isLoading &&
        responseGetAllAdmin.isLoading &&
        responseAboutUs.isLoading &&
        responseFooter.isLoading &&
        responseCategories.isLoading &&
        responseContact.isLoading &&
        responseVenues.isLoading &&
        responseGetAllBlogs.isLoading &&
        responseGetWebsiteHeader.isLoading &&
        responseGetSpaces.isLoading &&
        responseGetSectionTopDescription.isLoading &&
        responseGetCommunities.isLoading &&
        responseGetHeroSection.isLoading &&
        responsePages.isLoading &&
        responseSocialMedia.isLoading &&
        responseEvents.isLoading &&
        responsePrivacyPolicy.isLoading &&
        responseTermsAndConditions.isLoading &&
        responseEventSeats.isLoading &&
        responseOrders.isLoading ? (
          "Loading"
        ) : (
          <div className='App'>
            <GoToTop />
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path='/diwalibrussels' element={<DiwaliBrussels />} /> */}
              <Route path='/event/:eventId' element={<InfoPage />} />
              <Route path='/ourSpace/:ourSpaceId' element={<OurSpacePage />} />
              <Route path='/contactus' element={<ContactUsPage />} />
              <Route path='/aboutus' element={<AboutUsPage />} />
              <Route path='/blogpage' element={<BlogPage />} />
              <Route
                path='/blog/:singleBlogPageId'
                element={<SingleBlogPage />}
              />
              <Route path='/booking/:bookingEventID' element={<BookNow />} />
              <Route
                path='/bookingconfirmation/:bookingId'
                element={<BookNowThankYouPage />}
              />
              {/* <Route path='/yogafest' element={<YogaFest />} /> */}
              {/* <Route path='/rama' element={<Rama />} /> */}
              {/* <Route path='/taj' element={<Taj />} /> */}
              {/* <Route path='/performance' element={<Performance />} /> */}
              {/* <Route path='/collaboration' element={<Collaboration />} /> */}
              {/* <Route path='/resturants' element={<Restaurants />} /> */}
              {/* <Route path='/musicconservatory' element={<MusicConservatory />} /> */}
              <Route path='/privacy' element={<PrivacyPolicy />} />
              <Route path='/termandcondtion' element={<TermsAndCondition />} />
              <Route path='/admin' element={<AdminHomePage />} />

              <Route path='/page/:pageId' element={<Pages />} />
              <Route path='/adminlogin' element={<AdminLogin />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
