// Compose variants based on props

// appearDisabled: interactive but looks disabled
// nonInteractive: opposite of appearDisabled (no reaction to hover, click or focus)

export default function composeVariants(
  classNames: {
    hover?: `hover:${string}`;
    focus?: `focus-visible:${string}`;
    active?: `active:${string}`;
    loading?: `data-[loading]:${string}`;
    appearDisabled?: `data-[appear-disabled]:${string}`;
    disabled?: `disabled:${string}`;
    readOnly?: `read-only:${string}`;
  },
  props: {
    loading?: boolean;
    appearDisabled?: boolean;
    nonInteractive?: boolean;
  } = {},
) {
  return [
    props.appearDisabled && classNames.appearDisabled,
    // loading prop also applies disabled
    !props.loading && classNames.disabled,
    // hover, active, focus only apply if not nonInteractive, appearDisabled or loading
    !props.nonInteractive &&
      !props.loading &&
      !props.appearDisabled && [
        classNames.hover,
        classNames.active,
        classNames.focus,
      ],
    classNames.loading,
    classNames.readOnly,
  ];
}
