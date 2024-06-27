import React from "react";
import "./Faq.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
import FaqCard from "../Layout/FaqCard/FaqCard";

import { useGetFAQsQuery } from "../../services/faq";

function Faq() {
  const responseGetAllFAQs = useGetFAQsQuery();

  // const data = [
  //   {
  //     panel: "panel1",
  //     title: " What is the Nita Mukesh Ambani Cultural Centre?",
  //     details:
  //       "The Nita Mukesh Ambani Cultural Centre is a place where people come to learn about the diversity of cultural activities and traditions in India. It is a platform for the rich exchange of creative art forms, performing arts, and visual arts from India and the rest of the world. It is also a venue for exhibitions, lectures, workshops and community outreach. Visitors to the centre can experience the sights, sounds and colours of India from its culture, arts, history, and curated events. The Nita Mukesh Ambani Cultural Centre is a testament to India living cultural heritage and a place of learning and exploration for all.",
  //   },
  //   {
  //     panel: "panel2",
  //     title: " What is the Nita Mukesh Ambani Cultural Centre?",
  //     details:
  //       "The Nita Mukesh Ambani Cultural Centre is a place where people come to learn about the diversity of cultural activities and traditions in India. It is a platform for the rich exchange of creative art forms, performing arts, and visual arts from India and the rest of the world. It is also a venue for exhibitions, lectures, workshops and community outreach. Visitors to the centre can experience the sights, sounds and colours of India from its culture, arts, history, and curated events. The Nita Mukesh Ambani Cultural Centre is a testament to India living cultural heritage and a place of learning and exploration for all.",
  //   },
  //   {
  //     panel: "panel3",
  //     title: " What is the Nita Mukesh Ambani Cultural Centre?",
  //     details:
  //       "The Nita Mukesh Ambani Cultural Centre is a place where people come to learn about the diversity of cultural activities and traditions in India. It is a platform for the rich exchange of creative art forms, performing arts, and visual arts from India and the rest of the world. It is also a venue for exhibitions, lectures, workshops and community outreach. Visitors to the centre can experience the sights, sounds and colours of India from its culture, arts, history, and curated events. The Nita Mukesh Ambani Cultural Centre is a testament to India living cultural heritage and a place of learning and exploration for all.",
  //   },
  //   {
  //     panel: "panel4",
  //     title: " What is the Nita Mukesh Ambani Cultural Centre?",
  //     details:
  //       "The Nita Mukesh Ambani Cultural Centre is a place where people come to learn about the diversity of cultural activities and traditions in India. It is a platform for the rich exchange of creative art forms, performing arts, and visual arts from India and the rest of the world. It is also a venue for exhibitions, lectures, workshops and community outreach. Visitors to the centre can experience the sights, sounds and colours of India from its culture, arts, history, and curated events. The Nita Mukesh Ambani Cultural Centre is a testament to India living cultural heritage and a place of learning and exploration for all.",
  //   },
  //   {
  //     panel: "panel5",
  //     title: " What is the Nita Mukesh Ambani Cultural Centre?",
  //     details:
  //       "The Nita Mukesh Ambani Cultural Centre is a place where people come to learn about the diversity of cultural activities and traditions in India. It is a platform for the rich exchange of creative art forms, performing arts, and visual arts from India and the rest of the world. It is also a venue for exhibitions, lectures, workshops and community outreach. Visitors to the centre can experience the sights, sounds and colours of India from its culture, arts, history, and curated events. The Nita Mukesh Ambani Cultural Centre is a testament to India living cultural heritage and a place of learning and exploration for all.",
  //   },
  // ];

  return (
    <>
      {responseGetAllFAQs.isLoading === false && (
        <div className='faq'>
          <HeadImage />
          <h3>FAQS</h3>
          <div className='faq_cards' style={{ width: "100%" }}>
            {/* <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
            {responseGetAllFAQs?.data?.map((item, index) => (
              <FaqCard
                title={item.question}
                details={item.answer}
                panel={`${item.faqID}-${index}`}
              />
            ))}

            {/* <FaqCard />
        <FaqCard />
        <FaqCard /> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Faq;
