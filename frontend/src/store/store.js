import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// SLICES
import adminSlice from "../slice/adminSlice";
import blogSlice from "../slice/blogSlice";
import websiteHeaderSlice from "../slice/websiteHeaderSlice";
import spacesSlice from "../slice/spacesSlice";
import sectionTopDescriptionSlice from "../slice/sectionTopDescriptionSlice";
import communitySlice from "../slice/communitySlice";
import heroSectionSlice from "../slice/heroSectionSlice";
import footerSlice from "../slice/footerSlice";
import contactSlice from "../slice/contactSlice";
import categoriesSlice from "../slice/categoriesSlice";
import aboutUsSlice from "../slice/aboutUsSlice";
import venuesSlice from "../slice/venuesSlice";
import pagesSlice from "../slice/pagesSlice";
import dataChangeSlice from "../slice/dataChangeSlice";
import socialMediaSlice from "../slice/socialMediaSlice";
import eventsSlice from "../slice/eventsSlice";
import FilterEventSlice from "../slice/FilterEventSlice";
import privacyPolicySlice from "../slice/privacyPolicySlice";
import termsAndConditionsSlice from "../slice/termsAndConditionsSlice";
import eventSeatsSlice from "../slice/eventSeatsSlice";
import orderSlice from "../slice/orderSlice";
import faqSlice from "../slice/faqSlice";

// SERVICES
import { admin } from "../services/admin";
import { blog } from "../services/blog";
import { websiteHeader } from "../services/websiteHeader";
import { spaces } from "../services/spaces";
import { sectionTopDescription } from "../services/sectionTopDescription";
import { community } from "../services/community";
import { heroSection } from "../services/heroSection";
import { footer } from "../services/footer";
import { contact } from "../services/contact";
import { category } from "../services/categories";
import { aboutus } from "../services/aboutus";
import { venues } from "../services/venues";
import { pages } from "../services/pages";
import { socialmedia } from "../services/socialMedia";
import { events } from "../services/events";
import { privacyPolicy } from "../services/privacyPolicy";
import { termsAndConditions } from "../services/termsAndConditions";
import { eventSeats } from "../services/eventSeats";
import { orders } from "../services/orders";
import { faq } from "../services/faq";

export const store = configureStore({
  reducer: {
    dataChangeState: dataChangeSlice,
    filterEventState: FilterEventSlice,
    [admin.reducerPath]: admin.reducer,
    adminState: adminSlice,
    [blog.reducerPath]: blog.reducer,
    blogState: blogSlice,
    [websiteHeader.reducerPath]: websiteHeader.reducer,
    websiteHeaderState: websiteHeaderSlice,
    [spaces.reducerPath]: spaces.reducer,
    spacesState: spacesSlice,
    [sectionTopDescription.reducerPath]: sectionTopDescription.reducer,
    sectionTopDescriptionState: sectionTopDescriptionSlice,
    [community.reducerPath]: community.reducer,
    communityState: communitySlice,
    [heroSection.reducerPath]: heroSection.reducer,
    heroSectionState: heroSectionSlice,
    [footer.reducerPath]: footer.reducer,
    footerState: footerSlice,
    [contact.reducerPath]: contact.reducer,
    contactState: contactSlice,
    [category.reducerPath]: category.reducer,
    categoriesState: categoriesSlice,
    [aboutus.reducerPath]: aboutus.reducer,
    aboutUsState: aboutUsSlice,
    [venues.reducerPath]: venues.reducer,
    venuesState: venuesSlice,
    [pages.reducerPath]: pages.reducer,
    pagesState: pagesSlice,
    [socialmedia.reducerPath]: socialmedia.reducer,
    socialMediaState: socialMediaSlice,
    [events.reducerPath]: events.reducer,
    eventsState: eventsSlice,
    [privacyPolicy.reducerPath]: privacyPolicy.reducer,
    privacyPolicyState: privacyPolicySlice,
    [termsAndConditions.reducerPath]: termsAndConditions.reducer,
    termsAndConditionsState: termsAndConditionsSlice,
    [eventSeats.reducerPath]: eventSeats.reducer,
    eventSeatsState: eventSeatsSlice,
    [orders.reducerPath]: orders.reducer,
    orderState: orderSlice,
    [faq.reducerPath]: faq.reducer,
    faqState: faqSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      admin.middleware,
      blog.middleware,
      websiteHeader.middleware,
      spaces.middleware,
      sectionTopDescription.middleware,
      community.middleware,
      heroSection.middleware,
      footer.middleware,
      contact.middleware,
      category.middleware,
      aboutus.middleware,
      venues.middleware,
      pages.middleware,
      socialmedia.middleware,
      events.middleware,
      privacyPolicy.middleware,
      termsAndConditions.middleware,
      eventSeats.middleware,
      orders.middleware,
      faq.middleware,
    ]),
});

setupListeners(store.dispatch);
