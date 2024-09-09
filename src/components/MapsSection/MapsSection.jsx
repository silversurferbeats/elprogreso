import { Reveal } from "../Reveal";

function MapsSection() {
  return (
    <div className="relative px-6 py-20 md:py-20 max-w-5xl mx-auto">
      <div className="flex justify-center alight-center">
        <Reveal>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.764546004836!2d-58.73090921583292!3d-34.52675382084483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd5084ad457f%3A0x25ded62c27e306be!2sInt.%20Arricau%20972%2C%20B1660%20Jos%C3%A9%20C.%20Paz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1725906064526!5m2!1ses!2sar"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Reveal>
      </div>
    </div>
  );
}

export default MapsSection;
