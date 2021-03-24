import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: sŧring;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}