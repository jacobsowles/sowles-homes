import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

export const init = () =>
  library.add(faEnvelope, faHome, faMapMarkerAlt, faTools);
