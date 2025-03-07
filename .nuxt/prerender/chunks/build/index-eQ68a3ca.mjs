import { defineComponent, computed, unref, openBlock, createElementBlock, normalizeClass, withModifiers, createBlock, Transition, withCtx, withDirectives, createElementVNode, createVNode, vShow, createCommentVNode, normalizeStyle, renderSlot, Fragment, renderList, toDisplayString, useSSRContext, getCurrentInstance, useSlots, ref, watch, shallowRef, provide, inject, mergeProps, isVNode } from 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue@3.5.13_typescript@5.7.2/node_modules/vue/index.mjs';
import { b as buildProps, u as useNamespace, a as useLocale, E as ElIcon, c as arrow_left_default, d as arrow_right_default, w as withInstall, e as withNoopInstall, _ as _imports_3, f as _export_sfc$1 } from './virtual_public-BRi5M4s0.mjs';
import { i as isNumber, e as debugWarn } from './server.mjs';
import { throttle } from 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/lodash-unified@1.0.3_@types+lodash-es@4.17.12_lodash-es@4.17.21_lodash@4.17.21/node_modules/lodash-unified/import.js';
import { isString, isArray } from 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue@3.5.13_typescript@5.7.2/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _imports_2 } from './virtual_public-CytPWqqp.mjs';
import { _ as _imports_2$1 } from './virtual_public-OIGxJp94.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/pinia@2.3.0_typescript@5.7.2/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unhead@1.11.13/node_modules/unhead/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/@unhead+shared@1.11.13/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue-router@4.5.0_vue@3.5.13/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/cookie-es@1.2.2/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/ohash@1.1.4/node_modules/ohash/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/@unhead+ssr@1.11.13/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/unstorage@1.13.1_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';

const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
    default: ""
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3e3
  },
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],
    default: ""
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "hover"
  },
  type: {
    type: String,
    values: ["", "card"],
    default: ""
  },
  cardScale: {
    type: Number,
    default: 0.83
  },
  loop: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  motionBlur: Boolean
});
const carouselEmits = {
  change: (current, prev) => [current, prev].every(isNumber)
};
const carouselContextKey = Symbol("carouselContextKey");
const CAROUSEL_ITEM_NAME = "ElCarouselItem";
const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
      result.push(child, ...flattedChildren(child.component.subTree));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
    }
  });
  return result;
};
const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
const THROTTLE_TIME = 300;
const useCarousel = (props, emit, componentName) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = useOrderedChildren(getCurrentInstance(), CAROUSEL_ITEM_NAME);
  const slots = useSlots();
  const activeIndex = ref(-1);
  const timer = ref(null);
  const hover = ref(false);
  const root = ref();
  const containerHeight = ref(0);
  const isItemsTwoLength = ref(true);
  const isFirstCall = ref(true);
  const isTransitioning = ref(false);
  const arrowDisplay = computed(() => props.arrow !== "never" && !unref(isVertical));
  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0);
  });
  const isCardType = computed(() => props.type === "card");
  const isVertical = computed(() => props.direction === "vertical");
  const containerStyle = computed(() => {
    if (props.height !== "auto") {
      return {
        height: props.height
      };
    }
    return {
      height: `${containerHeight.value}px`,
      overflow: "hidden"
    };
  });
  const throttledArrowClick = throttle((index2) => {
    setActiveItem(index2);
  }, THROTTLE_TIME, { trailing: true });
  const throttledIndicatorHover = throttle((index2) => {
    handleIndicatorHover(index2);
  }, THROTTLE_TIME);
  const isTwoLengthShow = (index2) => {
    if (!isItemsTwoLength.value)
      return true;
    return activeIndex.value <= 1 ? index2 <= 1 : index2 > 1;
  };
  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }
  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value)
      return;
    timer.value = setInterval(() => playSlides(), props.interval);
  }
  const playSlides = () => {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1;
    } else if (props.loop) {
      activeIndex.value = 0;
    } else {
      isTransitioning.value = false;
    }
  };
  function setActiveItem(index2) {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (isString(index2)) {
      const filteredItems = items.value.filter((item) => item.props.name === index2);
      if (filteredItems.length > 0) {
        index2 = items.value.indexOf(filteredItems[0]);
      }
    }
    index2 = Number(index2);
    if (Number.isNaN(index2) || index2 !== Math.floor(index2)) {
      debugWarn(componentName, "index must be integer.");
      return;
    }
    const itemCount = items.value.length;
    const oldIndex = activeIndex.value;
    if (index2 < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0;
    } else if (index2 >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1;
    } else {
      activeIndex.value = index2;
    }
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex);
    }
    resetTimer();
  }
  function resetItemPosition(oldIndex) {
    items.value.forEach((item, index2) => {
      item.translateItem(index2, activeIndex.value, oldIndex);
    });
  }
  function itemInStage(item, index2) {
    var _a, _b, _c, _d;
    const _items = unref(items);
    const itemCount = _items.length;
    if (itemCount === 0 || !item.states.inStage)
      return false;
    const nextItemIndex = index2 + 1;
    const prevItemIndex = index2 - 1;
    const lastItemIndex = itemCount - 1;
    const isLastItemActive = _items[lastItemIndex].states.active;
    const isFirstItemActive = _items[0].states.active;
    const isNextItemActive = (_b = (_a = _items[nextItemIndex]) == null ? void 0 : _a.states) == null ? void 0 : _b.active;
    const isPrevItemActive = (_d = (_c = _items[prevItemIndex]) == null ? void 0 : _c.states) == null ? void 0 : _d.active;
    if (index2 === lastItemIndex && isFirstItemActive || isNextItemActive) {
      return "left";
    } else if (index2 === 0 && isLastItemActive || isPrevItemActive) {
      return "right";
    }
    return false;
  }
  function handleMouseEnter() {
    hover.value = true;
    if (props.pauseOnHover) {
      pauseTimer();
    }
  }
  function handleMouseLeave() {
    hover.value = false;
    startTimer();
  }
  function handleTransitionEnd() {
    isTransitioning.value = false;
  }
  function handleButtonEnter(arrow) {
    if (unref(isVertical))
      return;
    items.value.forEach((item, index2) => {
      if (arrow === itemInStage(item, index2)) {
        item.states.hover = true;
      }
    });
  }
  function handleButtonLeave() {
    if (unref(isVertical))
      return;
    items.value.forEach((item) => {
      item.states.hover = false;
    });
  }
  function handleIndicatorClick(index2) {
    if (index2 !== activeIndex.value) {
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
    activeIndex.value = index2;
  }
  function handleIndicatorHover(index2) {
    if (props.trigger === "hover" && index2 !== activeIndex.value) {
      activeIndex.value = index2;
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
  }
  function prev() {
    setActiveItem(activeIndex.value - 1);
  }
  function next() {
    setActiveItem(activeIndex.value + 1);
  }
  function resetTimer() {
    pauseTimer();
    if (!props.pauseOnHover)
      startTimer();
  }
  function setContainerHeight(height) {
    if (props.height !== "auto")
      return;
    containerHeight.value = height;
  }
  function PlaceholderItem() {
    var _a;
    const defaultSlots = (_a = slots.default) == null ? void 0 : _a.call(slots);
    if (!defaultSlots)
      return null;
    const flatSlots = flattedChildren(defaultSlots);
    const normalizeSlots = flatSlots.filter((slot) => {
      return isVNode(slot) && slot.type.name === CAROUSEL_ITEM_NAME;
    });
    if ((normalizeSlots == null ? void 0 : normalizeSlots.length) === 2 && props.loop && !isCardType.value) {
      isItemsTwoLength.value = true;
      return normalizeSlots;
    }
    isItemsTwoLength.value = false;
    return null;
  }
  watch(() => activeIndex.value, (current, prev2) => {
    resetItemPosition(prev2);
    if (isItemsTwoLength.value) {
      current = current % 2;
      prev2 = prev2 % 2;
    }
    if (prev2 > -1) {
      emit("change", current, prev2);
    }
  });
  watch(() => props.autoplay, (autoplay) => {
    autoplay ? startTimer() : pauseTimer();
  });
  watch(() => props.loop, () => {
    setActiveItem(activeIndex.value);
  });
  watch(() => props.interval, () => {
    resetTimer();
  });
  shallowRef();
  provide(carouselContextKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    cardScale: props.cardScale,
    addItem,
    removeItem,
    setActiveItem,
    setContainerHeight
  });
  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    isTransitioning,
    items,
    isVertical,
    containerStyle,
    isItemsTwoLength,
    handleButtonEnter,
    handleTransitionEnd,
    handleButtonLeave,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    PlaceholderItem,
    isTwoLengthShow,
    throttledArrowClick,
    throttledIndicatorHover
  };
};
const COMPONENT_NAME = "ElCarousel";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: carouselProps,
  emits: carouselEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      root,
      activeIndex,
      arrowDisplay,
      hasLabel,
      hover,
      isCardType,
      items,
      isVertical,
      containerStyle,
      handleButtonEnter,
      handleButtonLeave,
      isTransitioning,
      handleIndicatorClick,
      handleMouseEnter,
      handleMouseLeave,
      handleTransitionEnd,
      setActiveItem,
      prev,
      next,
      PlaceholderItem,
      isTwoLengthShow,
      throttledArrowClick,
      throttledIndicatorHover
    } = useCarousel(props, emit, COMPONENT_NAME);
    const ns = useNamespace("carousel");
    const { t } = useLocale();
    const carouselClasses = computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (unref(isCardType)) {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const carouselContainer = computed(() => {
      const classes = [ns.e("container")];
      if (props.motionBlur && unref(isTransitioning) && items.value.length > 1) {
        classes.push(unref(isVertical) ? `${ns.namespace.value}-transitioning-vertical` : `${ns.namespace.value}-transitioning`);
      }
      return classes;
    });
    const indicatorsClasses = computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (unref(hasLabel)) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside") {
        classes.push(ns.em("indicators", "outside"));
      }
      if (unref(isVertical)) {
        classes.push(ns.em("indicators", "right"));
      }
      return classes;
    });
    expose({
      activeIndex,
      setActiveItem,
      prev,
      next
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(carouselClasses)),
        onMouseenter: withModifiers(unref(handleMouseEnter), ["stop"]),
        onMouseleave: withModifiers(unref(handleMouseLeave), ["stop"])
      }, [
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: "carousel-arrow-left",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "left")]),
              "aria-label": unref(t)("el.carousel.leftArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("left"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) - 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_left_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) > 0)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 1,
          name: "carousel-arrow-right",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "right")]),
              "aria-label": unref(t)("el.carousel.rightArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("right"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) + 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) < unref(items).length - 1)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(carouselContainer)),
          style: normalizeStyle(unref(containerStyle)),
          onTransitionend: unref(handleTransitionEnd)
        }, [
          createVNode(unref(PlaceholderItem)),
          renderSlot(_ctx.$slots, "default")
        ], 46, ["onTransitionend"]),
        _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
          key: 2,
          class: normalizeClass(unref(indicatorsClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item, index2) => {
            return withDirectives((openBlock(), createElementBlock("li", {
              key: index2,
              class: normalizeClass([
                unref(ns).e("indicator"),
                unref(ns).em("indicator", _ctx.direction),
                unref(ns).is("active", index2 === unref(activeIndex))
              ]),
              onMouseenter: ($event) => unref(throttledIndicatorHover)(index2),
              onClick: withModifiers(($event) => unref(handleIndicatorClick)(index2), ["stop"])
            }, [
              createElementVNode("button", {
                class: normalizeClass(unref(ns).e("button")),
                "aria-label": unref(t)("el.carousel.indicator", { index: index2 + 1 })
              }, [
                unref(hasLabel) ? (openBlock(), createElementBlock("span", { key: 0 }, toDisplayString(item.props.label), 1)) : createCommentVNode("v-if", true)
              ], 10, ["aria-label"])
            ], 42, ["onMouseenter", "onClick"])), [
              [vShow, unref(isTwoLengthShow)(index2)]
            ]);
          }), 128))
        ], 2)) : createCommentVNode("v-if", true),
        props.motionBlur ? (openBlock(), createElementBlock("svg", {
          key: 3,
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          style: { "display": "none" }
        }, [
          createElementVNode("defs", null, [
            createElementVNode("filter", { id: "elCarouselHorizontal" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "12,0"
              })
            ]),
            createElementVNode("filter", { id: "elCarouselVertical" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "0,10"
              })
            ])
          ])
        ])) : createCommentVNode("v-if", true)
      ], 42, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var Carousel = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "carousel.vue"]]);
const carouselItemProps = buildProps({
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: ""
  }
});
const useCarouselItem = (props) => {
  const carouselContext = inject(carouselContextKey);
  const instance = getCurrentInstance();
  if (!carouselContext) {
    debugWarn(CAROUSEL_ITEM_NAME, "usage: <el-carousel></el-carousel-item></el-carousel>");
  }
  if (!instance) {
    debugWarn(CAROUSEL_ITEM_NAME, "compositional hook can only be invoked inside setups");
  }
  const carouselItemRef = ref();
  const hover = ref(false);
  const translate = ref(0);
  const scale = ref(1);
  const active = ref(false);
  const ready = ref(false);
  const inStage = ref(false);
  const animating = ref(false);
  const { isCardType, isVertical, cardScale } = carouselContext;
  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index2 = carouselContext.items.value.findIndex(({ uid }) => uid === instance.uid);
      carouselContext.setActiveItem(index2);
    }
  }
  return {
    carouselItemRef,
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick
  };
};
const __default__ = defineComponent({
  name: CAROUSEL_ITEM_NAME
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: carouselItemProps,
  setup(__props) {
    const ns = useNamespace("carousel");
    const {
      carouselItemRef,
      active,
      animating,
      hover,
      inStage,
      isVertical,
      translate,
      isCardType,
      scale,
      ready,
      handleItemClick
    } = useCarouselItem();
    const itemKls = computed(() => [
      ns.e("item"),
      ns.is("active", active.value),
      ns.is("in-stage", inStage.value),
      ns.is("hover", hover.value),
      ns.is("animating", animating.value),
      {
        [ns.em("item", "card")]: isCardType.value,
        [ns.em("item", "card-vertical")]: isCardType.value && isVertical.value
      }
    ]);
    const itemStyle = computed(() => {
      const translateType = `translate${unref(isVertical) ? "Y" : "X"}`;
      const _translate = `${translateType}(${unref(translate)}px)`;
      const _scale = `scale(${unref(scale)})`;
      const transform = [_translate, _scale].join(" ");
      return {
        transform
      };
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "carouselItemRef",
        ref: carouselItemRef,
        class: normalizeClass(unref(itemKls)),
        style: normalizeStyle(unref(itemStyle)),
        onClick: unref(handleItemClick)
      }, [
        unref(isCardType) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("mask"))
        }, null, 2)), [
          [vShow, !unref(active)]
        ]) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 14, ["onClick"])), [
        [vShow, unref(ready)]
      ]);
    };
  }
});
var CarouselItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "carousel-item.vue"]]);
const ElCarousel = withInstall(Carousel, {
  CarouselItem
});
const ElCarouselItem = withNoopInstall(CarouselItem);
const _imports_0 = publicAssetsURL("/image/image.png");
const _imports_4 = publicAssetsURL("/image/pic_recruitment.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-5808902b><div class="image-container" data-v-5808902b><img${ssrRenderAttr("src", _imports_0)} alt="Background Image" class="background-image" data-v-5808902b><div class="overlay" data-v-5808902b><p class="title" data-v-5808902b>SZU</p><p class="subtitle" data-v-5808902b>Data Management &amp; Intelligence Group</p></div></div><div class="about" data-v-5808902b><p class="asubtitle" data-v-5808902b>About Us</p><div class="dgimg" data-v-5808902b>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        width: "788px",
        height: "460px",
        direction: "vertical"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(3, (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/academicpage/image/${item}.png`)} alt="" style="${ssrRenderStyle({ "width": "100%" })}" data-v-5808902b${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `/academicpage/image/${item}.png`,
                        alt: "",
                        style: { "width": "100%" }
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                return createVNode(_component_el_carousel_item, { key: item }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: `/academicpage/image/${item}.png`,
                      alt: "",
                      style: { "width": "100%" }
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="dgoverlay" data-v-5808902b></div><p class="dgWord" data-v-5808902b> Research directions: <br data-v-5808902b><br data-v-5808902b><span class="dgword" data-v-5808902b> Efficient Algorithms for Geographic Information Systems<br data-v-5808902b> Efficient Algorithms for Large-scale Data Visualization<br data-v-5808902b> Efficient Query Processing for Spatial/Graph Databases<br data-v-5808902b> Distributed Algorithms for Spatial/Graph Databases<br data-v-5808902b> Development of Efficient Software Packages and System Prototypes </span><br data-v-5808902b><br data-v-5808902b> In this group, we have published many papers in top-tier conferences and journals in the database/data management field, including SIGMOD, PVLDB, ICDE, TODS, VLDBJ, and TKDE. </p></div><div class="member" data-v-5808902b><div class="mTitle" data-v-5808902b><img${ssrRenderAttr("src", _imports_3)} alt="" class="ellipse" data-v-5808902b><p class="mtitle" data-v-5808902b>Faculty Members</p><div class="line1" data-v-5808902b></div><div class="line2" data-v-5808902b></div></div><div class="teacher1" data-v-5808902b><div class="teacherbg" data-v-5808902b><p class="tname" data-v-5808902b>Tsz Nam Chan</p><p class="tintro" data-v-5808902b> Distinguished Professor<br data-v-5808902b> BEng, PhD PolyU (HK), SrMIEEE, MACM<br data-v-5808902b> NSF for Excellent Young Scientists (Overseas) </p></div><img${ssrRenderAttr("src", _imports_2)} alt="" class="teacherimg" data-v-5808902b></div><div class="teacher2" data-v-5808902b><div class="teacherbg" data-v-5808902b><p class="tname" data-v-5808902b>Dingming Wu</p><p class="tintro" data-v-5808902b> Associate Professor<br data-v-5808902b> B. Sc. HUST, M. Sc. PKU, Ph. D. AAU (DK) </p></div><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="teacherimg" data-v-5808902b></div></div><div class="recruitment" data-v-5808902b><div class="recruitmentbg" data-v-5808902b></div><p class="rtitle" data-v-5808902b>Recruitment</p><div class="rintro" data-v-5808902b> Our group is seeking qualified applicants for the positions of Assistant Professor, Associate Researcher, and Postdoc. We welcome motivated individuals who meet the following qualifications:<br data-v-5808902b><br data-v-5808902b> (1) Strong Academic Background: Candidates should have a robust track record in data management research or closely related areas, such as publications in top-tier conferences and journals.<br data-v-5808902b><br data-v-5808902b> (2) Independent Research Capability: Agpplicants should demonstrate the ability to initiate and conduct independent, innovative research.<br data-v-5808902b><br data-v-5808902b> (3) Excellent Communication and Presentation Skills: The ability to effectively communicate complex ideas and research findings is essential. </div><p class="rinvite" data-v-5808902b> If you are interested in joining us, please contact us via these two email addresses: <span style="${ssrRenderStyle({ "color": "#0072CB" })}" data-v-5808902b> edisonchan2013928@gmail.com (Dr. Tsz Nam Chan)</span> and <span style="${ssrRenderStyle({ "color": "#0072CB" })}" data-v-5808902b> dingming.wu@gmail.com (Dr. Dingming Wu).</span></p><p class="rsubtitle" data-v-5808902b>Welcome to the Data Management &amp; Intelligence Group in Shenzhen University (SZU).</p><img${ssrRenderAttr("src", _imports_4)} alt="" class="rimg" data-v-5808902b></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5808902b"]]);

export { index as default };
//# sourceMappingURL=index-eQ68a3ca.mjs.map
