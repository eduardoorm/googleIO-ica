import React from "react";

const ItemTweet = () => {
  return (
    <div className="containerItemTweet">
      <blockquote class="twitter-tweet">
        <p lang="es" dir="ltr">
          Seguimos con la segunda sesión del Curso de Desarrollo Web 😎💻🎉
          <br />
          Link de zoom:
          <a href="https://t.co/3FWGkans4w">https://t.co/3FWGkans4w</a>
          <a href="https://twitter.com/hashtag/gdsc?src=hash&amp;ref_src=twsrc%5Etfw">
            #gdsc
          </a>
          <a href="https://twitter.com/hashtag/gdsc_unica?src=hash&amp;ref_src=twsrc%5Etfw">
            #gdsc_unica
          </a>
          <a href="https://twitter.com/hashtag/google?src=hash&amp;ref_src=twsrc%5Etfw">
            #google
          </a>
          <a href="https://twitter.com/hashtag/HTML?src=hash&amp;ref_src=twsrc%5Etfw">
            #HTML
          </a>
          <a href="https://twitter.com/hashtag/CSS?src=hash&amp;ref_src=twsrc%5Etfw">
            #CSS
          </a>
        </p>
        &mdash; Google Developer Student Club UNICA (@dsc_unica)
        <a href="https://twitter.com/dsc_unica/status/1594353150601101313?ref_src=twsrc%5Etfw">
          November 20, 2022
        </a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
};

export default ItemTweet;
