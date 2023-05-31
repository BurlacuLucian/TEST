import Card from "../UI/Card";
import classes from "./AboutPage.module.css";

function AboutPage() {
  return (
    <Card>
      <h1>ABOUT US</h1>
      <Card>
        <Card>
          <p>- fgfgsa fahjgf </p>
          <img
            className={classes.img}
            src="https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            repudiandae incidunt ipsam, ut, earum debitis placeat eum quibusdam
            soluta illum necessitatibus voluptatem provident enim quae eos
            dolorum culpa perferendis! Beatae!
          </p>
        </Card>
        <Card>
          <p>- aaa</p>
          <p>aasssasas</p>
          <img
            className={classes.img}
            src="https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            dolore dignissimos, veritatis perferendis nostrum quia ipsum
            quibusdam facere pariatur excepturi numquam officia magni similique
            amet alias dolores iure eum illo!
          </p>
        </Card>
        <Card>
          <p>- aaa</p>
          <img
            className={classes.img}
            src="https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia dolor praesentium, suscipit obcaecati aliquam et
            tenetur quaerat consectetur dolore voluptatum cumque, quas, placeat
            numquam? Deleniti fugiat accusamus temporibus error.
          </p>
        </Card>
      </Card>
    </Card>
  );
}

export default AboutPage;
