import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAt,
  faCreditCard,
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/pro-regular-svg-icons';

export const init = () =>
  library.add(
    faAt,
    faBars,
    faCreditCard,
    faEnvelope,
    faHome,
    faMapMarkerAlt,
    faTimes,
    faTools
  );
