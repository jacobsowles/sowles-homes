import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAt,
  faCreditCard,
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

export const init = () =>
  library.add(faAt, faCreditCard, faEnvelope, faHome, faMapMarkerAlt, faTools);
