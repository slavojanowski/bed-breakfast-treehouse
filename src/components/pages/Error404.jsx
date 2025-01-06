import PageCover from "../global/PageCover/PageCover";
import PageBanner from "../global/PageCover/PageBanner";
import ButtonLarge from "../global/ButtonLarge";
import SinglePageCover from "/various-images/single-page-cover-bg-cover.jpg";

const Error404 = () => {
  return (
    <PageCover
      coverStyle={{
        backgroundImage: `url(${SinglePageCover})`,
      }}
      coverClass={"error-page"}
    >
      <PageBanner
        title="Ups... Błąd 404"
        subtitle="Przykro nam, ale strona, której szukasz nie istnieje."
      >
        <ButtonLarge buttonText="Wróć do strony głównej" buttonLink="/" />
      </PageBanner>
    </PageCover>
  );
};

export default Error404;
