import Image from "next/image";
import React from "react";
import read from "../assets/reading.svg";

const AboutDisplay = () => {
  return (
    <div className="container-about">
      <div className="about">
        <h1 className="title-about">Sobre nós</h1>
        <p className="text-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ut ullamcorper ut <br />
          viverra felis orci, non. Non, ac convallis convallis aliquet leo
          neque. Luctus <br />
          condimentum at condimentum purus. Varius urna congue bibendum nisi
          netus vitae <br />
          risus. Viverra vulputate eu sollicitudin lorem odio mi, enim,
          pulvinar. Ipsum molestie <br />
          commodo consequat nulla viverra. Imperdiet est purus et malesuada
          interdum. Nisl <br />
          aliquam quam lectus augue.
        </p>

        <p className="text-about">
          {" "}
          Purus viverra nullam augue consectetur gravida. Porttitor in mi et
          convallis ipsum <br />
          vulputate. Aliquam donec sollicitudin at maecenas arcu tempus, sit
          etiam. Nec cras <br />
          adipiscing nec suspendisse nibh fermentum erat aliquet suspendisse.
          Blandit ultrices <br />
          sollicitudin aliquam rhoncus mattis posuere sem elit. Sit tempus nec
          velit urna. Arcu <br />
          sem dictumst accumsan nunc ut interdum gravida commodo.
        </p>

        <p className="text-about">
          Gravida eros accumsan adipiscing elementum iaculis amet. Sed aliquet
          pharetra, et <br />
          sed mi bibendum scelerisque. Lorem lorem non purus in ligula et elit
          ipsum. Quis velit <br />
          felis lacus ultrices dolor.
        </p>
      </div>

      <div>
        <Image src={read} alt="" className="image" />
      </div>
    </div>
  );
};

export default AboutDisplay;
