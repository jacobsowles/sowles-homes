import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCreditCard,
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

export const init = () =>
  library.add(faCreditCard, faEnvelope, faHome, faMapMarkerAlt, faTools);
