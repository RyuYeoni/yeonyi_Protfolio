import GoTopBtn from "../../components/button/GotoTopBtn";
import MailSentBtn from "../../components/button/MailSendBtn";
import FeedbackBtn from "../../components/button/FeedbackBtn";
import { EMAILL } from "./constant";

export const quickBtnsData = [
  {
    id: 1,
    datatooltip: EMAILL,
    tooltiptype: 'left',
    icon: <MailSentBtn name='Copy Email' />
  },
  {
    id: 2,
    datatooltip: 'Give Feedback',
    tooltiptype: 'left',
    icon: <FeedbackBtn name='Give Feedback' />

  },
  {
    id: 3,
    datatooltip: 'Go to Top',
    tooltiptype: 'left',
    icon: <GoTopBtn name='Go to Top' />
  }
]