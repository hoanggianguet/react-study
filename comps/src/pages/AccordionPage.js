import Accorditon from "../components/Accorditon";

function AccordionPage() {
  const items = [
    {
      id: "123",
      label: "Can I use React on a project",
      content: "You can use React on any project you want",
    },
    {
      id: "1234",
      label: "Can I use React on a project",
      content: "You can use React on any project you want",
    },
    {
      id: "12345",
      label: "Can I use React on a project",
      content: "You can use React on any project you want",
    },
  ];
  return <Accorditon items={items} />;
}

export default AccordionPage;
