type Props = {
  viewBox: string;
  height: string;
};

export default function NewsBoxOutline(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox}>
      <g
        id="グループ_114"
        data-name="グループ 114"
        transform="translate(-16 -629.82)"
      >
        <g id="グループ_113" data-name="グループ 113">
          <g id="グループ_112" data-name="グループ 112">
            <g id="グループ_111" data-name="グループ 111">
              <g
                id="長方形_131"
                data-name="長方形 131"
                transform="translate(21 654)"
                fill="#f6d967"
                stroke="#250b0d"
                stroke-width="2"
              >
                {/* 黄色い長方形 */}
                <rect width="340" height={props.height} rx="29" stroke="none" />
                <rect
                  x="1"
                  y="1"
                  width="338"
                  height={props.height}
                  rx="28"
                  fill="none"
                />
              </g>
              <g id="グループ_110" data-name="グループ 110">
                <g id="グループ_109" data-name="グループ 109">
                  <g id="グループ_108" data-name="グループ 108">
                    <g id="グループ_107" data-name="グループ 107">
                      <path
                        id="パス_21"
                        data-name="パス 21"
                        d="M314.5,0"
                        transform="translate(30.25 778.5)"
                        fill="none"
                        stroke="#dd9d37"
                        stroke-width="1"
                      />
                      <g id="グループ_106" data-name="グループ 106">
                        <g id="グループ_105" data-name="グループ 105">
                          <g id="グループ_104" data-name="グループ 104">
                            <g id="グループ_103" data-name="グループ 103">
                              <g id="グループ_102" data-name="グループ 102">
                                <g id="グループ_101" data-name="グループ 101">
                                  <g
                                    id="長方形_133"
                                    data-name="長方形 133"
                                    transform="translate(16 659)"
                                    fill="#fff"
                                    stroke="#250b0d"
                                    stroke-width="2"
                                  >
                                    <rect
                                      width="340"
                                      height={props.height}
                                      rx="29"
                                      stroke="none"
                                    />
                                    <rect
                                      x="1"
                                      y="1"
                                      width="338"
                                      height={props.height}
                                      rx="28"
                                      fill="none"
                                    />
                                  </g>
                                </g>
                                <g id="グループ_100" data-name="グループ 100">
                                  <g id="グループ_99" data-name="グループ 99">
                                    <g id="グループ_98" data-name="グループ 98">
                                      <text
                                        id="NEWS"
                                        transform="translate(42.344 630.82)"
                                        fill="#250b0d"
                                        stroke="#250b0d"
                                        stroke-width="1"
                                        font-size="50"
                                        font-family="irohakakuC-Bold, irohakakuC"
                                        font-weight="700"
                                        letter-spacing="0.05em"
                                      >
                                        <tspan x="0" y="54">
                                          NEWS
                                        </tspan>
                                      </text>
                                      <g
                                        id="グループ_97"
                                        data-name="グループ 97"
                                      >
                                        <g
                                          id="コンポーネント_5_1"
                                          data-name="コンポーネント 5 – 1"
                                          transform="translate(38.75 632.82)"
                                        >
                                          <text
                                            id="NEWS-2"
                                            data-name="NEWS"
                                            fill="#fff"
                                            stroke="#250b0d"
                                            stroke-width="1"
                                            font-size="50"
                                            font-family="irohakakuC-Bold, irohakakuC"
                                            font-weight="700"
                                            letter-spacing="0.05em"
                                          >
                                            <tspan x="0" y="54">
                                              NEWS
                                            </tspan>
                                          </text>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
