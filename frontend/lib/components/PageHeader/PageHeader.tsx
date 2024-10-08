import { useHelpContext } from "@/lib/context/HelpProvider/hooks/useHelpContext";
import { useMenuContext } from "@/lib/context/MenuProvider/hooks/useMenuContext";
import { ButtonType } from "@/lib/types/QuivrButton";

import styles from "./PageHeader.module.scss";

import { Icon } from "../ui/Icon/Icon";
import { QuivrButton } from "../ui/QuivrButton/QuivrButton";

type Props = {
  iconName: string;
  label: string;
  buttons: ButtonType[];
  snippetEmoji?: string;
  snippetColor?: string;
};

export const PageHeader = ({
  iconName,
  label,
  buttons,
  snippetColor,
  snippetEmoji,
}: Props): JSX.Element => {
  const { isOpened } = useMenuContext();
  const { isVisible, setIsVisible } = useHelpContext();

  return (
    <>
      <div className={styles.page_header_wrapper}>
        <div
          className={`${styles.left} ${!isOpened ? styles.menu_closed : ""}`}
        >
          {snippetEmoji && snippetColor ? (
            <div
              className={styles.brain_snippet}
              style={{ backgroundColor: snippetColor }}
            >
              <span>{snippetEmoji}</span>
            </div>
          ) : (
            <Icon name={iconName} size="large" color="primary" />
          )}
          <span>{label}</span>
        </div>
        <div className={styles.buttons_wrapper}>
          {buttons.map((button, index) => (
            <QuivrButton
              key={index}
              label={button.label}
              onClick={button.onClick}
              color={button.color}
              iconName={button.iconName}
              hidden={button.hidden}
              disabled={button.disabled}
              tooltip={button.tooltip}
            />
          ))}
        </div>
      </div>
      <div
        className={styles.help_button}
        onClick={() => setIsVisible(!isVisible)}
      >
        <Icon name="help" size="normal" color="black" />
      </div>
    </>
  );
};

export default PageHeader;
