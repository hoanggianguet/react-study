import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  const handleClick= () => {
    console.log("Click");
  }
  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick}>
          <GoBell/>
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
