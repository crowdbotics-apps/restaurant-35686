import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_815_4}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7eafafb3-fe83-4116-9b45-945904a1cfa5"
          }}
          style={styles.ImageBackground_815_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a3551f8-622f-45cb-a6bc-23dc16cae345"
          }}
          style={styles.ImageBackground_815_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a963e096-1bc3-4c2a-857d-a6471e2e1867"
          }}
          style={styles.ImageBackground_815_7}
        />
      </View>
      <View style={styles.View_815_8}>
        <View style={styles.View_815_13}>
          <View style={styles.View_815_14}>
            <View style={styles.View_815_15}>
              <View style={styles.View_815_17}>
                <View style={styles.View_815_18}>
                  <Text style={styles.Text_815_18}>Explore Nobility World</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fc3b9ce-858a-4d42-afb9-c609bce79f2b"
                  }}
                  style={styles.ImageBackground_815_19}
                />
              </View>
              <View style={styles.View_815_22}>
                <Text style={styles.Text_815_22}>
                  Experience luxurious cuisine
                </Text>
              </View>
            </View>
            <View style={styles.View_815_23}>
              <Text style={styles.Text_815_23}>
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
                aliquam amet tellus{" "}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_815_24}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("815_1789"))
              }
            >
              <View style={styles.View_815_25}>
                <Text style={styles.Text_815_25}>Explore Blog</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View_815_26}>
            <View style={styles.View_815_27} />
            <View style={styles.View_815_28} />
            <View style={styles.View_815_29}>
              <View style={styles.View_815_30} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cfa8cbe-5bf5-4a9e-ace1-0e2637958325"
                }}
                style={styles.ImageBackground_815_31}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_815_34}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d948da2-5f0c-4202-abb8-bbb6699cff6f"
            }}
            style={styles.ImageBackground_815_36}
          />
          <View style={styles.View_815_37}>
            <Text style={styles.Text_815_37}>Scroll</Text>
          </View>
        </View>
        <View style={styles.View_815_38}>
          <View style={styles.View_815_39}>
            <Text style={styles.Text_815_39}>01</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bf44def-3056-4881-9128-74bd8648d03f"
            }}
            style={styles.ImageBackground_815_40}
          />
          <View style={styles.View_815_41}>
            <Text style={styles.Text_815_41}>02</Text>
          </View>
          <View style={styles.View_815_42}>
            <Text style={styles.Text_815_42}>03</Text>
          </View>
          <View style={styles.View_815_43}>
            <Text style={styles.Text_815_43}>04</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_815_47}>
        <View style={styles.View_815_48}>
          <View style={styles.View_815_49}>
            <View style={styles.View_815_50} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c07d1759-0c64-4569-9ece-44ac05f6dc81"
              }}
              style={styles.ImageBackground_815_51}
            />
          </View>
          <View style={styles.View_815_52} />
        </View>
        <View style={styles.View_815_78}>
          <View style={styles.View_815_79}>
            <View style={styles.View_815_80}>
              <View style={styles.View_815_81}>
                <Text style={styles.Text_815_81}>Instagram</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42425733-d942-4bf8-bff0-30b182797f56"
                }}
                style={styles.ImageBackground_815_82}
              />
              <View style={styles.View_815_85}>
                <Text style={styles.Text_815_85}>Photo Gallery</Text>
              </View>
            </View>
            <View style={styles.View_815_86}>
              <Text style={styles.Text_815_86}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
              </Text>
            </View>
            <View style={styles.View_815_87}>
              <View style={styles.View_815_88}>
                <Text style={styles.Text_815_88}>View More</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_89}>
            <View style={styles.View_815_90}>
              <View style={styles.View_815_91}>
                <View style={styles.View_815_92} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a189a95-364b-4c28-af0a-ab81594afd16"
                  }}
                  style={styles.ImageBackground_815_93}
                />
              </View>
              <View style={styles.View_815_94}>
                <View style={styles.View_815_95} />
              </View>
            </View>
            <View style={styles.View_815_98}>
              <View style={styles.View_815_99}>
                <View style={styles.View_815_100} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e591237e-0c78-40f1-879e-a7e94de17ed6"
                  }}
                  style={styles.ImageBackground_815_101}
                />
              </View>
              <View style={styles.View_815_102}>
                <View style={styles.View_815_103} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afe4dc84-a4a9-44bb-8f04-6c05aebea537"
                  }}
                  style={styles.ImageBackground_815_104}
                />
              </View>
            </View>
            <View style={styles.View_815_106}>
              <View style={styles.View_815_107}>
                <View style={styles.View_815_108} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e013869c-442d-4741-9793-911c5afe60e0"
                  }}
                  style={styles.ImageBackground_815_109}
                />
              </View>
              <View style={styles.View_815_110}>
                <View style={styles.View_815_111} />
              </View>
            </View>
            <View style={styles.View_815_114}>
              <View style={styles.View_815_115}>
                <View style={styles.View_815_116} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/901c7adb-afb5-4a61-a17c-cdc4a2e3db8e"
                  }}
                  style={styles.ImageBackground_815_117}
                />
              </View>
              <View style={styles.View_815_118}>
                <View style={styles.View_815_119} />
              </View>
            </View>
            <View style={styles.View_815_122}>
              <View style={styles.View_815_123}>
                <View style={styles.View_815_124} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/452651b3-ccbb-47cf-91d7-797fa83e0dd4"
                  }}
                  style={styles.ImageBackground_815_125}
                />
              </View>
              <View style={styles.View_815_126}>
                <View style={styles.View_815_127} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_130}>
        <View style={styles.View_815_131}>
          <View style={styles.View_815_132}>
            <Text style={styles.Text_815_132}>Exploration</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/664b9ec9-6047-44eb-9a2b-d3855e5341a7"
            }}
            style={styles.ImageBackground_815_133}
          />
          <View style={styles.View_815_136}>
            <Text style={styles.Text_815_136}>Find a Blog</Text>
          </View>
        </View>
        <View style={styles.View_815_137}>
          <View style={styles.View_815_138}>
            <View style={styles.View_815_139} />
            <View style={styles.View_815_140}>
              <View style={styles.View_815_141}>
                <Text style={styles.Text_815_141}>Topic</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a123450f-5b44-456d-b6f5-31619037309e"
                }}
                style={styles.ImageBackground_815_142}
              />
            </View>
          </View>
          <View style={styles.View_815_144}>
            <View style={styles.View_815_145} />
            <View style={styles.View_815_146}>
              <View style={styles.View_815_147}>
                <Text style={styles.Text_815_147}>12/05/2021</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15007577-65e6-4ea5-80a9-e22f21636a7e"
                }}
                style={styles.ImageBackground_815_148}
              />
            </View>
          </View>
          <View style={styles.View_815_150}>
            <View style={styles.View_815_151}>
              <View style={styles.View_815_152}>
                <Text style={styles.Text_815_152}>11:00 AM</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97ab0aac-c9ba-4a41-9029-cf394636a7f2"
                }}
                style={styles.ImageBackground_815_153}
              />
            </View>
            <View style={styles.View_815_155} />
          </View>
        </View>
        <View style={styles.View_815_156}>
          <View style={styles.View_815_157}>
            <Text style={styles.Text_815_157}>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_815_158}>
        <View style={styles.View_815_159}>
          <View style={styles.View_815_160} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adb2a174-8ad6-4462-956f-59b9844a8179"
            }}
            style={styles.ImageBackground_815_161}
          />
        </View>
        <View style={styles.View_815_162}>
          <View style={styles.View_815_163} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2456f51a-e62d-41ad-8845-8354bfcc0cf4"
            }}
            style={styles.ImageBackground_815_164}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be2c1bd5-6aea-41be-a578-41927f65a60c"
            }}
            style={styles.ImageBackground_815_165}
          />
        </View>
        <View style={styles.View_815_166}>
          <View style={styles.View_815_167} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e50a12e4-57cd-43c2-b3ba-eb5ee109faf7"
            }}
            style={styles.ImageBackground_815_168}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66a7df92-9f81-42c7-9c60-5b7b607e47ed"
            }}
            style={styles.ImageBackground_815_169}
          />
        </View>
        <View style={styles.View_815_170}>
          <View style={styles.View_815_171} />
          <View style={styles.View_815_172}>
            <Text style={styles.Text_815_172}>Bar Menu</Text>
          </View>
        </View>
        <View style={styles.View_815_173}>
          <View style={styles.View_815_174} />
          <View style={styles.View_815_175}>
            <Text style={styles.Text_815_175}>Food Menu</Text>
          </View>
        </View>
        <View style={styles.View_815_176}>
          <View style={styles.View_815_177} />
          <View style={styles.View_815_178}>
            <Text style={styles.Text_815_178}>Desserts Menu</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02f32e98-d0e8-4e98-abff-2bfedea06f42"
          }}
          style={styles.ImageBackground_815_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27f44d63-68c9-4df8-898b-aaafe206a024"
          }}
          style={styles.ImageBackground_815_180}
        />
      </View>
      <View style={styles.View_815_181}>
        <View style={styles.View_815_182}>
          <View style={styles.View_815_183}>
            <Text style={styles.Text_815_183}>Blogs</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/640fc4ee-cc42-44b6-aba3-39118c9fe173"
            }}
            style={styles.ImageBackground_815_184}
          />
          <View style={styles.View_815_187}>
            <Text style={styles.Text_815_187}>New updates</Text>
          </View>
        </View>
        <View style={styles.View_815_188}>
          <View style={styles.View_815_189}>
            <View style={styles.View_815_190}>
              <View style={styles.View_815_191}>
                <View style={styles.View_815_192} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d07f60bd-024f-42ca-a5ea-3ab9727d3bce"
                  }}
                  style={styles.ImageBackground_815_193}
                />
              </View>
              <View style={styles.View_815_194} />
            </View>
            <View style={styles.View_815_195}>
              <View style={styles.View_815_196}>
                <View style={styles.View_815_197}>
                  <Text style={styles.Text_815_197}>16 Apr 2021</Text>
                </View>
              </View>
              <View style={styles.View_815_198}>
                <Text style={styles.Text_815_198}>
                  tips for prepping and caring for your grill
                </Text>
              </View>
              <View style={styles.View_815_199}>
                <Text style={styles.Text_815_199}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                  in.
                </Text>
              </View>
              <View style={styles.View_815_200}>
                <Text style={styles.Text_815_200}>Read More</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_201}>
            <View style={styles.View_815_202}>
              <View style={styles.View_815_203}>
                <View style={styles.View_815_204} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/203005e0-efe0-4f03-b351-aee022e3c638"
                  }}
                  style={styles.ImageBackground_815_205}
                />
              </View>
              <View style={styles.View_815_206} />
            </View>
            <View style={styles.View_815_207}>
              <View style={styles.View_815_208}>
                <View style={styles.View_815_209}>
                  <Text style={styles.Text_815_209}>23 May 2021</Text>
                </View>
              </View>
              <View style={styles.View_815_210}>
                <Text style={styles.Text_815_210}>
                  summer cocktails and mocktails
                </Text>
              </View>
              <View style={styles.View_815_211}>
                <Text style={styles.Text_815_211}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                  in.
                </Text>
              </View>
              <View style={styles.View_815_215}>
                <Text style={styles.Text_815_215}>Read More</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_216}>
            <View style={styles.View_815_217}>
              <View style={styles.View_815_218}>
                <View style={styles.View_815_219} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e2dbf2c-1c87-4eb2-9ed2-8ea68c025dfd"
                  }}
                  style={styles.ImageBackground_815_220}
                />
              </View>
              <View style={styles.View_815_221} />
            </View>
            <View style={styles.View_815_222}>
              <View style={styles.View_815_223}>
                <View style={styles.View_815_224}>
                  <Text style={styles.Text_815_224}>06 Aug 2021</Text>
                </View>
              </View>
              <View style={styles.View_815_225}>
                <Text style={styles.Text_815_225}>
                  easy cooking for college students
                </Text>
              </View>
              <View style={styles.View_815_226}>
                <Text style={styles.Text_815_226}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                  in.
                </Text>
              </View>
              <View style={styles.View_815_230}>
                <Text style={styles.Text_815_230}>Read More</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_815_231}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("815_1789"))
          }
        >
          <View style={styles.View_815_232}>
            <Text style={styles.Text_815_232}>View More</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_815_233}>
        <View style={styles.View_815_264}>
          <View style={styles.View_815_265}>
            <View style={styles.View_815_266}>
              <Text style={styles.Text_815_266}>Testimony</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ab1082a-0f1b-4383-af2d-16da86960df2"
              }}
              style={styles.ImageBackground_815_267}
            />
            <View style={styles.View_815_270}>
              <Text style={styles.Text_815_270}>Happy customers</Text>
            </View>
          </View>
          <View style={styles.View_815_271}>
            <View style={styles.View_815_272}>
              <View style={styles.View_815_273}>
                <View style={styles.View_815_274}>
                  <View style={styles.View_815_275} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f902a0c-0ca1-4391-92a1-233a4cccd029"
                    }}
                    style={styles.ImageBackground_815_276}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ad11225-fbe2-432a-902e-2086cf71163e"
                  }}
                  style={styles.ImageBackground_815_277}
                />
              </View>
              <View style={styles.View_815_278}>
                <View style={styles.View_815_279}>
                  <Text style={styles.Text_815_279}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                    auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                    eget sit. Nulla scelerisque scelerisque congue.
                  </Text>
                </View>
                <View style={styles.View_815_280}>
                  <View style={styles.View_815_281}>
                    <Text style={styles.Text_815_281}>Red is Sus</Text>
                  </View>
                  <View style={styles.View_815_282}>
                    <Text style={styles.Text_815_282}>Sommelier</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_283}>
              <View style={styles.View_815_284}>
                <View style={styles.View_815_285}>
                  <View style={styles.View_815_286} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/284174d8-9cc5-4ff7-a9bc-c89eea219400"
                    }}
                    style={styles.ImageBackground_815_287}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7975ff3e-f8a9-4a25-a02c-015345dd809e"
                    }}
                    style={styles.ImageBackground_815_288}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9322c1a3-ca2f-4ae8-8fbe-933ffe0c405d"
                  }}
                  style={styles.ImageBackground_815_289}
                />
              </View>
              <View style={styles.View_815_290}>
                <View style={styles.View_815_291}>
                  <Text style={styles.Text_815_291}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                    auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                    eget sit. Nulla scelerisque scelerisque congue.
                  </Text>
                </View>
                <View style={styles.View_815_292}>
                  <View style={styles.View_815_293}>
                    <Text style={styles.Text_815_293}>Navi Sus</Text>
                  </View>
                  <View style={styles.View_815_294}>
                    <Text style={styles.Text_815_294}>Chef</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_295}>
            <View style={styles.View_815_296}>
              <View style={styles.View_815_297}>
                <View style={styles.View_815_298}>
                  <View style={styles.View_815_299} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7aac9c76-801c-4c57-9570-2bdbdabd8090"
                    }}
                    style={styles.ImageBackground_815_300}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/387b6429-ef4d-4a9c-83dd-4e002fe0a5c0"
                    }}
                    style={styles.ImageBackground_815_301}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd8ad513-3ea0-4a7d-b868-1701f0864526"
                  }}
                  style={styles.ImageBackground_815_302}
                />
              </View>
              <View style={styles.View_815_303}>
                <View style={styles.View_815_304}>
                  <Text style={styles.Text_815_304}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                    auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                    eget sit. Nulla scelerisque scelerisque congue.
                  </Text>
                </View>
                <View style={styles.View_815_305}>
                  <View style={styles.View_815_306}>
                    <Text style={styles.Text_815_306}>Amogus</Text>
                  </View>
                  <View style={styles.View_815_307}>
                    <Text style={styles.Text_815_307}>Chef</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_308}>
              <View style={styles.View_815_309}>
                <View style={styles.View_815_310}>
                  <View style={styles.View_815_311} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04893676-08dc-4e52-8c55-2ee29c4a2ece"
                    }}
                    style={styles.ImageBackground_815_312}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfafe46a-5cf7-4915-894c-a28507d13e0c"
                    }}
                    style={styles.ImageBackground_815_313}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a07e6e99-ef62-42ee-ab3f-383aadc20e17"
                  }}
                  style={styles.ImageBackground_815_314}
                />
              </View>
              <View style={styles.View_815_315}>
                <View style={styles.View_815_316}>
                  <Text style={styles.Text_815_316}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                    auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                    eget sit. Nulla scelerisque scelerisque congue.
                  </Text>
                </View>
                <View style={styles.View_815_317}>
                  <View style={styles.View_815_318}>
                    <Text style={styles.Text_815_318}>Imposter sus</Text>
                  </View>
                  <View style={styles.View_815_319}>
                    <Text style={styles.Text_815_319}>Caterer</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_320}>
        <View style={styles.View_815_321}>
          <View style={styles.View_815_322} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05ff65b6-9d36-4a28-b764-77e1d3972e35"
            }}
            style={styles.ImageBackground_815_325}
          />
        </View>
        <View style={styles.View_815_326}>
          <View style={styles.View_815_327} />
        </View>
        <View style={styles.View_815_328}>
          <View style={styles.View_815_329}>
            <Text style={styles.Text_815_329}>Food</Text>
          </View>
          <View style={styles.View_815_330}>
            <Text style={styles.Text_815_330}>Beverage</Text>
          </View>
          <View style={styles.View_815_331}>
            <Text style={styles.Text_815_331}>Table manner</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_815_332}>
        <View style={styles.View_815_333}>
          <View style={styles.View_815_334}>
            <Text style={styles.Text_815_334}>Which Drinks for Hot Summer</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f04bbe7e-29a2-45bc-b4ae-504f177f2e24"
            }}
            style={styles.ImageBackground_815_335}
          />
          <View style={styles.View_815_338}>
            <Text style={styles.Text_815_338}>Suggestions for Summer</Text>
          </View>
        </View>
        <View style={styles.View_815_339}>
          <View style={styles.View_815_340}>
            <View style={styles.View_815_341}>
              <Text style={styles.Text_815_341}>Wine &amp; Beer</Text>
            </View>
            <View style={styles.View_815_342}>
              <View style={styles.View_815_343}>
                <View style={styles.View_815_344}>
                  <View style={styles.View_815_345}>
                    <Text style={styles.Text_815_345}>Chapel Hill Shiraz</Text>
                  </View>
                  <View style={styles.View_815_346} />
                  <View style={styles.View_815_347}>
                    <Text style={styles.Text_815_347}>Page 02</Text>
                  </View>
                </View>
                <View style={styles.View_815_348}>
                  <Text style={styles.Text_815_348}>AU | Bottle</Text>
                </View>
              </View>
              <View style={styles.View_815_349}>
                <View style={styles.View_815_350}>
                  <View style={styles.View_815_351}>
                    <Text style={styles.Text_815_351}>Catena Malbec</Text>
                  </View>
                  <View style={styles.View_815_352} />
                  <View style={styles.View_815_353}>
                    <Text style={styles.Text_815_353}>Page 34</Text>
                  </View>
                </View>
                <View style={styles.View_815_354}>
                  <Text style={styles.Text_815_354}>AR | Bottle</Text>
                </View>
              </View>
              <View style={styles.View_815_355}>
                <View style={styles.View_815_356}>
                  <View style={styles.View_815_357}>
                    <Text style={styles.Text_815_357}>La Vieille Rosé</Text>
                  </View>
                  <View style={styles.View_815_358} />
                  <View style={styles.View_815_359}>
                    <Text style={styles.Text_815_359}>Page 22</Text>
                  </View>
                </View>
                <View style={styles.View_815_360}>
                  <Text style={styles.Text_815_360}>FR | 750 ml</Text>
                </View>
              </View>
              <View style={styles.View_815_361}>
                <View style={styles.View_815_362}>
                  <View style={styles.View_815_363}>
                    <Text style={styles.Text_815_363}>Rhino Pale Ale</Text>
                  </View>
                  <View style={styles.View_815_364} />
                  <View style={styles.View_815_365}>
                    <Text style={styles.Text_815_365}>Page 29</Text>
                  </View>
                </View>
                <View style={styles.View_815_366}>
                  <Text style={styles.Text_815_366}>CA | 750 ml</Text>
                </View>
              </View>
              <View style={styles.View_815_367}>
                <View style={styles.View_815_368}>
                  <View style={styles.View_815_369}>
                    <Text style={styles.Text_815_369}>Irish Guinness</Text>
                  </View>
                  <View style={styles.View_815_370} />
                  <View style={styles.View_815_371}>
                    <Text style={styles.Text_815_371}>Page 07</Text>
                  </View>
                </View>
                <View style={styles.View_815_372}>
                  <Text style={styles.Text_815_372}>IE | 750 ml</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_373}>
            <View style={styles.View_815_374}>
              <View style={styles.View_815_375} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8e69b2d-38ba-4f16-8b67-9ca806b6a7eb"
                }}
                style={styles.ImageBackground_815_376}
              />
            </View>
            <View style={styles.View_815_377} />
          </View>
          <View style={styles.View_815_378}>
            <View style={styles.View_815_379}>
              <Text style={styles.Text_815_379}>Cocktails</Text>
            </View>
            <View style={styles.View_815_380}>
              <View style={styles.View_815_381}>
                <View style={styles.View_815_382}>
                  <View style={styles.View_815_383}>
                    <Text style={styles.Text_815_383}>Aperol Spritz</Text>
                  </View>
                  <View style={styles.View_815_384} />
                  <View style={styles.View_815_385}>
                    <Text style={styles.Text_815_385}>Page 102</Text>
                  </View>
                </View>
                <View style={styles.View_815_386}>
                  <Text style={styles.Text_815_386}>
                    Aperol | Villa Marchesi prosecco | soda | 30ml
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_387}>
                <View style={styles.View_815_388}>
                  <View style={styles.View_815_389}>
                    <Text style={styles.Text_815_389}>
                      Dark &#39;N&#39; Stormy
                    </Text>
                  </View>
                  <View style={styles.View_815_390} />
                  <View style={styles.View_815_391}>
                    <Text style={styles.Text_815_391}>Page 67</Text>
                  </View>
                </View>
                <View style={styles.View_815_392}>
                  <Text style={styles.Text_815_392}>
                    Dark rum | Ginger beer | Slice of lime.{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_393}>
                <View style={styles.View_815_394}>
                  <View style={styles.View_815_395}>
                    <Text style={styles.Text_815_395}>Daiquiri</Text>
                  </View>
                  <View style={styles.View_815_396} />
                  <View style={styles.View_815_397}>
                    <Text style={styles.Text_815_397}>Page 23</Text>
                  </View>
                </View>
                <View style={styles.View_815_398}>
                  <Text style={styles.Text_815_398}>
                    Rum | Citrus juice | Sugar
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_399}>
                <View style={styles.View_815_400}>
                  <View style={styles.View_815_401}>
                    <Text style={styles.Text_815_401}>Old Fashioned</Text>
                  </View>
                  <View style={styles.View_815_402} />
                  <View style={styles.View_815_403}>
                    <Text style={styles.Text_815_403}>Page 11</Text>
                  </View>
                </View>
                <View style={styles.View_815_404}>
                  <Text style={styles.Text_815_404}>
                    Bourbon | Brown sugar | Angostura Bitters
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_405}>
                <View style={styles.View_815_406}>
                  <View style={styles.View_815_407}>
                    <Text style={styles.Text_815_407}>Negroni</Text>
                  </View>
                  <View style={styles.View_815_408} />
                  <View style={styles.View_815_409}>
                    <Text style={styles.Text_815_409}>Page 13</Text>
                  </View>
                </View>
                <View style={styles.View_815_410}>
                  <Text style={styles.Text_815_410}>
                    Gin | Sweet Vermouth | Campari | Orange garnish
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_815_411}>
          <View style={styles.View_815_412}>
            <Text style={styles.Text_815_412}>View More</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_815_413}>
        <View style={styles.View_815_414}>
          <View style={styles.View_815_415}>
            <View style={styles.View_815_416} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/990f50e8-3099-4a51-8de6-0bead92b7ac2"
              }}
              style={styles.ImageBackground_815_417}
            />
          </View>
          <View style={styles.View_815_418} />
        </View>
        <View style={styles.View_815_419}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b89f98d-96d6-4da2-b99c-b5528fbc7c26"
            }}
            style={styles.ImageBackground_815_420}
          />
          <View style={styles.View_815_421}>
            <View style={styles.View_815_422}>
              <View style={styles.View_815_423}>
                <Text style={styles.Text_815_423}>About Us</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/102db6a0-592a-4197-96b4-7f755fa48933"
                }}
                style={styles.ImageBackground_815_424}
              />
            </View>
            <View style={styles.View_815_427}>
              <Text style={styles.Text_815_427}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_815_428}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("815_933"))
              }
            >
              <View style={styles.View_815_429}>
                <Text style={styles.Text_815_429}>Know More</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View_815_430}>
            <View style={styles.View_815_431}>
              <View style={styles.View_815_432}>
                <Text style={styles.Text_815_432}>Our Admin</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1588b70-aa05-41ab-a74b-636ba18b1cdb"
                }}
                style={styles.ImageBackground_815_433}
              />
            </View>
            <View style={styles.View_815_436}>
              <Text style={styles.Text_815_436}>
                Adipiscing tempus ullamcorper lobortis odio tellus arcu
                volutpat. Risus placerat morbi volutpat habitasse interdum mi
                aliquam In sed odio nec aliquet.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_815_437}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("815_1486"))
              }
            >
              <View style={styles.View_815_438}>
                <Text style={styles.Text_815_438}>Know More</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aceb46a8-70a2-4c12-aef9-3313f7546856"
            }}
            style={styles.ImageBackground_815_439}
          />
        </View>
      </View>
      <View style={styles.View_815_440}>
        <View style={styles.View_815_441}>
          <View style={styles.View_815_442}>
            <View style={styles.View_815_443} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc0ea694-47ec-4312-b345-f36a5c1e1ab3"
              }}
              style={styles.ImageBackground_815_444}
            />
          </View>
          <View style={styles.View_815_445} />
        </View>
        <View style={styles.View_815_448}>
          <View style={styles.View_815_449}>
            <View style={styles.View_815_450} />
            <View style={styles.View_815_451} />
            <View style={styles.View_815_452}>
              <View style={styles.View_815_453} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/191f75b5-ef13-44b6-b8b9-57db38aa01a1"
                }}
                style={styles.ImageBackground_815_454}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05864941-16d0-421e-aa8f-e8a2b3fd0406"
                }}
                style={styles.ImageBackground_815_455}
              />
            </View>
          </View>
          <View style={styles.View_815_456}>
            <View style={styles.View_815_457}>
              <View style={styles.View_815_458}>
                <Text style={styles.Text_815_458}>Blogger</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce870493-dac4-47f3-a35f-46b0014221d3"
                }}
                style={styles.ImageBackground_815_459}
              />
              <View style={styles.View_815_462}>
                <Text style={styles.Text_815_462}>What we believe in</Text>
              </View>
            </View>
            <View style={styles.View_815_463}>
              <View style={styles.View_815_464}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fdfd388-5831-4ae3-ae6e-baf5e62a4e9d"
                  }}
                  style={styles.ImageBackground_815_465}
                />
                <View style={styles.View_815_466}>
                  <Text style={styles.Text_815_466}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    auctor sit .
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_467}>
                <Text style={styles.Text_815_467}>
                  auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                  eget sit. Nulla scelerisque scelerisque congue ac consequat,
                  aliquam molestie lectus eu. Congue iaculis integer curabitur
                  semper sit nunc.
                </Text>
              </View>
            </View>
            <View style={styles.View_815_468}>
              <View style={styles.View_815_469}>
                <Text style={styles.Text_815_469}>Vy Pham</Text>
              </View>
              <View style={styles.View_815_470}>
                <Text style={styles.Text_815_470}>Blogger &amp; Founder</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_471}>
        <View style={styles.View_815_472}>
          <View style={styles.View_815_473}>
            <View style={styles.View_815_474} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f8fcffb-6dc4-4812-9823-aca260419568"
              }}
              style={styles.ImageBackground_815_475}
            />
          </View>
          <View style={styles.View_815_476} />
        </View>
        <View style={styles.View_815_479}>
          <View style={styles.View_815_480}>
            <View style={styles.View_815_481}>
              <View style={styles.View_815_482}>
                <View style={styles.View_815_483}>
                  <View style={styles.View_815_484}>
                    <Text style={styles.Text_815_484}>Contact Us</Text>
                  </View>
                  <View style={styles.View_815_485}>
                    <View style={styles.View_815_486}>
                      <Text style={styles.Text_815_486}>
                        31 W 10rd St, New Fork, NYC 3110, SUS
                      </Text>
                    </View>
                    <View style={styles.View_815_487}>
                      <Text style={styles.Text_815_487}>+1 2345-678-JQK</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_815_488}>
                  <View style={styles.View_815_489}>
                    <Text style={styles.Text_815_489}>Working Hours</Text>
                  </View>
                  <View style={styles.View_815_490}>
                    <View style={styles.View_815_491}>
                      <Text style={styles.Text_815_491}>
                        Monday-Friday: 08:00 am -12:00 am
                      </Text>
                    </View>
                    <View style={styles.View_815_492}>
                      <Text style={styles.Text_815_492}>
                        Saturday-Sunday: 07:00am -11:00 pm
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_493}>
                <View style={styles.View_815_494}>
                  <Text style={styles.Text_815_494}>Bon Appetit Voyage</Text>
                </View>
                <View style={styles.View_815_495}>
                  <View style={styles.View_815_496}>
                    <View style={styles.View_815_497}>
                      <Text style={styles.Text_815_497}>
                        “I&#39;m on a seafood diet. I see food, I eat it.”
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c619ac87-b86a-435b-9809-4edd4fd6809c"
                      }}
                      style={styles.ImageBackground_815_498}
                    />
                    <View style={styles.View_815_501}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceb2b1d0-7cd1-4ed0-812e-591841fe9e48"
                        }}
                        style={styles.ImageBackground_815_502}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42cde69d-aaa3-48cc-84ad-84d34c51d4c3"
                        }}
                        style={styles.ImageBackground_815_504}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1564620-39ee-415b-b17d-31fdf1959582"
                        }}
                        style={styles.ImageBackground_815_506}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_508}>
              <View style={styles.View_815_509}>
                <Text style={styles.Text_815_509}>
                  2022 Bon Appetit Voyage. All Wrongs reserved.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_510}>
            <View style={styles.View_815_511}>
              <View style={styles.View_815_512}>
                <View style={styles.View_815_513}>
                  <Text style={styles.Text_815_513}>Newsletter</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27f88a3b-398e-47de-8884-75da396a3334"
                  }}
                  style={styles.ImageBackground_815_514}
                />
                <View style={styles.View_815_517}>
                  <Text style={styles.Text_815_517}>
                    Subscribe to Our Newsletter
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_518}>
                <Text style={styles.Text_815_518}>
                  And never miss latest Updates!
                </Text>
              </View>
            </View>
            <View style={styles.View_815_519}>
              <View style={styles.View_815_520}>
                <View style={styles.View_815_521} />
                <View style={styles.View_815_522}>
                  <View style={styles.View_815_523}>
                    <Text style={styles.Text_815_523}>Email Address</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_524}>
                <View style={styles.View_815_525}>
                  <Text style={styles.Text_815_525}>Subscribe</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_526}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7f74545-56a6-4cc0-82aa-ae83be56484b"
              }}
              style={styles.ImageBackground_815_528}
            />
            <View style={styles.View_815_529}>
              <Text style={styles.Text_815_529}>Top</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_530}>
        <View style={styles.View_815_531}>
          <View style={styles.View_815_532}>
            <View style={styles.View_815_533}>
              <View style={styles.View_815_534}>
                <Text style={styles.Text_815_534}>Bon Appetit Voyage</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_815_535}>
          <View style={styles.View_815_536}>
            <Text style={styles.Text_815_536}>Home</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_537}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_1318"))
            }
          >
            <Text style={styles.Text_815_537}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_538}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_1789"))
            }
          >
            <Text style={styles.Text_815_538}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_539}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_2455"))
            }
          >
            <Text style={styles.Text_815_539}>FAQ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_815_540}>
        <View style={styles.View_815_541}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bafa1a8-fb7e-4e3b-8233-fd72ef53c263"
            }}
            style={styles.ImageBackground_815_542}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9ef0bfd-6ffe-4520-9c24-b32cdc66eff9"
            }}
            style={styles.ImageBackground_815_545}
          />
        </View>
        <View style={styles.View_815_564}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92bd6f44-df1c-4752-8491-36be52d9747b"
            }}
            style={styles.ImageBackground_815_565}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e7a11a4-4c33-429d-a1b2-1582b699eda6"
            }}
            style={styles.ImageBackground_815_568}
          />
        </View>
        <View style={styles.View_815_587}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bdae2c0-3467-4686-a2e1-34366a955569"
            }}
            style={styles.ImageBackground_815_588}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8965c81-3970-4cd8-aab3-e344af8478df"
            }}
            style={styles.ImageBackground_815_591}
          />
        </View>
        <View style={styles.View_815_610}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b6150c1-52f1-4aae-84c6-295d1e380fe3"
            }}
            style={styles.ImageBackground_815_611}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57dfbc4f-b61a-4715-8537-7f6744c74f86"
            }}
            style={styles.ImageBackground_815_614}
          />
        </View>
      </View>
      <View style={styles.View_815_633}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fec92386-8ceb-4901-8641-d6cc6f284742"
          }}
          style={styles.ImageBackground_815_634}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa57299e-d0f1-41db-b557-d882f290ebbf"
          }}
          style={styles.ImageBackground_815_637}
        />
      </View>
      <View style={styles.View_815_656}>
        <View style={styles.View_815_657}>
          <View style={styles.View_815_658}>
            <View style={styles.View_815_659} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/340f2dd4-1ce1-4a6b-bd8e-0b0d90996202"
              }}
              style={styles.ImageBackground_815_660}
            />
          </View>
          <View style={styles.View_815_661} />
        </View>
        <View style={styles.View_815_664}>
          <View style={styles.View_815_665}>
            <View style={styles.View_815_666}>
              <View style={styles.View_815_667}>
                <View style={styles.View_815_668}>
                  <Text style={styles.Text_815_668}>
                    Awards &amp; recognition
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47696702-78ad-4312-986d-de6f3dd8a73e"
                  }}
                  style={styles.ImageBackground_815_669}
                />
                <View style={styles.View_815_672}>
                  <Text style={styles.Text_815_672}>Our Laurels</Text>
                </View>
              </View>
              <View style={styles.View_815_673}>
                <View style={styles.View_815_674}>
                  <View style={styles.View_815_675}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae29fc48-2258-4dbd-aabe-01091e5fc310"
                      }}
                      style={styles.ImageBackground_815_676}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce247f17-c4dd-4bf2-a3fe-91ce77dc6116"
                      }}
                      style={styles.ImageBackground_815_749}
                    />
                  </View>
                  <View style={styles.View_815_750}>
                    <View style={styles.View_815_751}>
                      <Text style={styles.Text_815_751}>An Ba To Com</Text>
                    </View>
                    <View style={styles.View_815_752}>
                      <Text style={styles.Text_815_752}>
                        Lorem ipsum dolor sit amet, consectetur.
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_815_753}>
                  <View style={styles.View_815_754}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41aa6441-2e4d-41ef-8a13-104c750208ea"
                      }}
                      style={styles.ImageBackground_815_755}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a546a5c-e09d-49b2-9107-083a686dcfc5"
                      }}
                      style={styles.ImageBackground_815_759}
                    />
                  </View>
                  <View style={styles.View_815_760}>
                    <View style={styles.View_815_761}>
                      <Text style={styles.Text_815_761}>U Look Sus</Text>
                    </View>
                    <View style={styles.View_815_762}>
                      <Text style={styles.Text_815_762}>
                        Lorem ipsum dolor sit amet, consectetur.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_763}>
                <View style={styles.View_815_764}>
                  <View style={styles.View_815_765}>
                    <View style={styles.View_815_766}>
                      <View style={styles.View_815_767}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7314a733-437c-4dfd-bd2f-e7e7b067022b"
                          }}
                          style={styles.ImageBackground_815_768}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/278fed0b-f21c-41cc-bb06-5804d55c3379"
                          }}
                          style={styles.ImageBackground_815_769}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5f375fa-bc2b-460d-a1e7-a1b134b85cc7"
                          }}
                          style={styles.ImageBackground_815_770}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32d66568-de39-401e-bc16-1b94639eb4dd"
                          }}
                          style={styles.ImageBackground_815_771}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d239cbf2-dbaf-4ca5-a92c-f0fbd22f1d9d"
                          }}
                          style={styles.ImageBackground_815_772}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43c99d1e-5674-48d2-bd4f-7d5e14a848ff"
                          }}
                          style={styles.ImageBackground_815_773}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb0791fe-fe75-498e-b610-ec2eb235472e"
                          }}
                          style={styles.ImageBackground_815_774}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/956ceeb7-c359-4811-822c-b1f84d80f95f"
                          }}
                          style={styles.ImageBackground_815_786}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fac9036-d75e-4142-a84e-cab0a673ba29"
                          }}
                          style={styles.ImageBackground_815_798}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/368e6c42-0ccf-436d-9743-6756050d0793"
                          }}
                          style={styles.ImageBackground_815_810}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b3f1ea6-8e9e-4514-82e0-2721584feddb"
                          }}
                          style={styles.ImageBackground_815_811}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7075e1f5-157a-4825-83ac-6bb3237f0cdf"
                          }}
                          style={styles.ImageBackground_815_812}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c2dfc53-d5ef-4c78-87f5-535a98d04e2d"
                          }}
                          style={styles.ImageBackground_815_813}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ed84590-5f7c-4723-a063-17cd348bbeb7"
                          }}
                          style={styles.ImageBackground_815_814}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7f30504-3cbd-4aad-9191-5dc4c78e481f"
                          }}
                          style={styles.ImageBackground_815_815}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e39e7527-0a26-4377-872e-1c7a92a49a83"
                          }}
                          style={styles.ImageBackground_815_816}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/512aad84-7976-4a5e-aee5-4262734cdd4f"
                          }}
                          style={styles.ImageBackground_815_817}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4171e97-8139-4328-9d95-5c2794f8821b"
                          }}
                          style={styles.ImageBackground_815_818}
                        />
                      </View>
                      <View style={styles.View_815_819}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c815bae-45cb-4453-99e8-7ff6cc1aca70"
                          }}
                          style={styles.ImageBackground_815_820}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/978101cd-c5b4-45a4-846c-9d22b6c2826c"
                          }}
                          style={styles.ImageBackground_815_821}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beb7aefb-a765-4ba4-bcfe-109d93d985ae"
                          }}
                          style={styles.ImageBackground_815_822}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9de6c7a0-7d24-45f4-96e2-1ad1998c8314"
                          }}
                          style={styles.ImageBackground_815_823}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc7386da-a516-4f5f-a4c7-da9c5167da68"
                          }}
                          style={styles.ImageBackground_815_824}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7232e4c4-55e7-4f5a-aa6d-09c02d7885ec"
                          }}
                          style={styles.ImageBackground_815_825}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ed0d8a1-1924-4c9b-9801-862dd13c6eb8"
                          }}
                          style={styles.ImageBackground_815_826}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/523420f6-ae63-439a-9fe1-ec1b9c4e47c6"
                          }}
                          style={styles.ImageBackground_815_838}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f662bace-7c7f-413b-afe3-2a74310e84e9"
                          }}
                          style={styles.ImageBackground_815_850}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21bbcc4f-2d93-4354-9168-4f30236a9261"
                          }}
                          style={styles.ImageBackground_815_862}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a18b49b-93af-4530-a3ef-4b7fee02748f"
                          }}
                          style={styles.ImageBackground_815_863}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b42df88d-5b1c-45ad-b1d0-471d45ddbbf5"
                          }}
                          style={styles.ImageBackground_815_864}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b9bc491-9f9f-477e-ae25-426a3b8ea132"
                          }}
                          style={styles.ImageBackground_815_865}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59cb5c8d-da32-4169-9bce-48ee78506e2f"
                          }}
                          style={styles.ImageBackground_815_866}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d9e5d1f-31ed-4c83-ab9d-da512cb0e237"
                          }}
                          style={styles.ImageBackground_815_867}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0527688b-8083-404e-9aa7-74e93de819d0"
                          }}
                          style={styles.ImageBackground_815_868}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efc80d41-a188-4840-8257-44ec156d12af"
                          }}
                          style={styles.ImageBackground_815_869}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d4d1f3b-4b4d-441f-aadf-193aa450a63a"
                          }}
                          style={styles.ImageBackground_815_870}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b32b6117-716d-46e2-89d9-ee8f5c4c08e2"
                        }}
                        style={styles.ImageBackground_815_871}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be66c6b3-4f33-439e-be18-b20b252fd631"
                      }}
                      style={styles.ImageBackground_815_873}
                    />
                  </View>
                  <View style={styles.View_815_874}>
                    <View style={styles.View_815_875}>
                      <Text style={styles.Text_815_875}>Chika Chika pu</Text>
                    </View>
                    <View style={styles.View_815_876}>
                      <Text style={styles.Text_815_876}>
                        Lorem ipsum dolor sit amet, consectetur.
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_815_877}>
                  <View style={styles.View_815_878}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c9b0fe3-d10b-447f-b859-73f6a34b72d1"
                      }}
                      style={styles.ImageBackground_815_879}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9e00114-0ea7-4279-ad54-c36bb0713752"
                      }}
                      style={styles.ImageBackground_815_922}
                    />
                  </View>
                  <View style={styles.View_815_923}>
                    <View style={styles.View_815_924}>
                      <Text style={styles.Text_815_924}>Oh no Cringe</Text>
                    </View>
                    <View style={styles.View_815_925}>
                      <Text style={styles.Text_815_925}>
                        Lorem ipsum dolor sit amet, consectetur.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_926}>
              <View style={styles.View_815_927}>
                <View style={styles.View_815_928} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40584002-165c-47b8-988d-4ffc1983b210"
                  }}
                  style={styles.ImageBackground_815_929}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cbd28c7-aced-48b6-9967-694d8df7d90a"
                  }}
                  style={styles.ImageBackground_815_930}
                />
              </View>
              <View style={styles.View_815_931} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1e9a2b4-daee-4130-8af6-9a5a8e70a553"
                }}
                style={styles.ImageBackground_815_932}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(12, 11, 8, 1)" },
  View_2: { height: hp("1600%") },
  View_815_4: {
    width: wp("163%"),
    minWidth: wp("163%"),
    height: hp("2037%"),
    minHeight: hp("2037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55%"),
    top: hp("152%")
  },
  ImageBackground_815_5: {
    width: wp("106%"),
    height: hp("359%"),
    top: hp("1417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_815_6: {
    width: wp("116%"),
    minWidth: wp("116%"),
    height: hp("2037%"),
    minHeight: hp("2037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_815_7: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("1461%"),
    minHeight: hp("1461%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_815_8: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("113%"),
    minHeight: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("23%")
  },
  View_815_13: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_14: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_15: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_17: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_18: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_19: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_22: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_22: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 72,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "capitalize"
  },
  View_815_23: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_815_23: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_24: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_25: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_25: {
    color: "rgba(12, 11, 8, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_26: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_815_27: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_28: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_29: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_815_30: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_31: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_34: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_36: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_815_37: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_815_37: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "uppercase"
  },
  View_815_38: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_39: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  ImageBackground_815_40: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_815_41: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_41: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_42: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_42: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_43: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_43: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_47: {
    width: wp("126%"),
    minWidth: wp("126%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("1344%")
  },
  View_815_48: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_49: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_50: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  ImageBackground_815_51: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_52: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  View_815_78: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_79: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_80: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_81: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_82: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_85: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_85: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_86: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_815_86: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_87: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_88: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_88: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_89: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_90: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_91: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_92: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_93: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_94: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_95: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_98: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_815_99: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_100: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_101: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_102: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_103: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  ImageBackground_815_104: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_815_106: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_815_107: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_108: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_109: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_110: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_111: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_114: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%")
  },
  View_815_115: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_116: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_117: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_118: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_119: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_122: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_815_123: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_124: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_125: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_126: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_127: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_130: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("309%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_131: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_132: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_133: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_815_136: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_136: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_137: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_138: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_139: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(245, 239, 219, 1)",
    borderWidth: 1
  },
  View_815_140: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_141: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  ImageBackground_815_142: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_815_144: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_815_145: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(245, 239, 219, 1)",
    borderWidth: 1
  },
  View_815_146: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_147: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_147: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  ImageBackground_815_148: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_815_150: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%")
  },
  View_815_151: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_152: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_152: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  ImageBackground_815_153: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_815_155: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(245, 239, 219, 1)",
    borderWidth: 1
  },
  View_815_156: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("51%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_157: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_157: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_158: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("393%")
  },
  View_815_159: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_160: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_162: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_163: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_164: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_165: {
    width: wp("173%"),
    minWidth: wp("173%"),
    height: hp("292%"),
    minHeight: hp("292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-36%"),
    top: hp("-112%"),
    resizeMode: "cover"
  },
  View_815_166: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_167: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_168: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_169: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("175%"),
    minHeight: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-41%"),
    resizeMode: "cover"
  },
  View_815_170: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_171: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_172: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_815_172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_173: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_815_174: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_175: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_815_175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_176: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%")
  },
  View_815_177: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_178: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_815_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_179: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("4%")
  },
  ImageBackground_815_180: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("4%")
  },
  View_815_181: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_182: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_183: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_184: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_815_187: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_187: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_188: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_189: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_190: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_191: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_192: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_193: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_194: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_195: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_196: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_197: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_197: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_198: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_198: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_199: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_815_199: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_200: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_815_200: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_201: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_202: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_203: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_204: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_205: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_206: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_207: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_208: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_209: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_209: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_210: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_210: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_211: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_815_211: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_215: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_815_215: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_216: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_217: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_218: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_219: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_220: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_221: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_222: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_223: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_224: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_224: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_225: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_225: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_226: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_815_226: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_230: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_815_230: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_231: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("142%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_232: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_232: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_233: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("858%")
  },
  View_815_264: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_265: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_266: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_267: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_815_270: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_270: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_271: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_272: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_273: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_274: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_275: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_276: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_277: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_278: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_279: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_279: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_280: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_281: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_281: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_282: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_282: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_283: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_284: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_285: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_286: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_287: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_288: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-8%")
  },
  ImageBackground_815_289: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_290: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_291: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_291: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_292: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_293: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_293: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_294: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_294: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_295: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_296: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_297: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_298: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_299: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_300: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_301: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-9%")
  },
  ImageBackground_815_302: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_303: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_304: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_304: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_305: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_306: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_306: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_307: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_307: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_308: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_309: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_310: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_311: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_312: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_313: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("-1%")
  },
  ImageBackground_815_314: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_315: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_316: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_316: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_317: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_318: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_318: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_319: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_319: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_320: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("398%")
  },
  View_815_321: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_322: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_325: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_326: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_327: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_328: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_329: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_330: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_815_330: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_331: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_815_331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_332: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("133%"),
    minHeight: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_333: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_334: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_334: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_335: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_815_338: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_338: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.56,
    textTransform: "capitalize"
  },
  View_815_339: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_340: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_341: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_341: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "capitalize"
  },
  View_815_342: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_343: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_344: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_345: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_345: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_346: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_347: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_347: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_348: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_348: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_349: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_350: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_351: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_351: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_352: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_353: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_354: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_354: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_355: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_356: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_357: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_357: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_358: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_359: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_360: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_360: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_361: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_362: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_363: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_363: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_365: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_366: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_366: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_367: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_368: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_369: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_369: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_370: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_371: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_372: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_372: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_373: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  View_815_374: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_375: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_376: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_377: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_378: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_379: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "capitalize"
  },
  View_815_380: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_381: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_382: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_383: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_383: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_384: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_385: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_386: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_386: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_387: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_388: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_389: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_389: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_390: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_391: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_391: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_392: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_392: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_393: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_394: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_395: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_395: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_396: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_397: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_397: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_398: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_398: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_399: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_400: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_401: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_401: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_402: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_403: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_403: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_404: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_404: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_405: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_406: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_407: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_407: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_408: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_409: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_410: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_410: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_411: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("127%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_412: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_412: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_413: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131%"),
    minHeight: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("157%")
  },
  View_815_414: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131%"),
    minHeight: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)",
    overflow: "hidden"
  },
  View_815_415: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131%"),
    minHeight: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_416: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131%"),
    minHeight: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  ImageBackground_815_417: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131%"),
    minHeight: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_418: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("131%"),
    minHeight: hp("131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  View_815_419: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%")
  },
  ImageBackground_815_420: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("20%")
  },
  View_815_421: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_422: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_423: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_423: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_424: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_815_427: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_815_427: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_428: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("34%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_429: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_429: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_430: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_431: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_432: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_432: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_433: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_436: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_815_436: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_437: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_438: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_438: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_439: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_815_440: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("695%")
  },
  View_815_441: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_442: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_443: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  ImageBackground_815_444: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_445: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  View_815_448: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_449: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_450: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_451: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_452: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_815_453: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_454: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_455: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("128%"),
    minHeight: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_456: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_457: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_458: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_459: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_462: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_462: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_463: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_464: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_465: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_466: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_815_466: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_467: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_467: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_468: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_469: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_469: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_470: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_815_470: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_471: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("145%"),
    minHeight: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1455%")
  },
  View_815_472: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_473: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_474: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  ImageBackground_815_475: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_476: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  View_815_479: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("124%"),
    minHeight: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_815_480: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_481: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_815_482: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_483: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_484: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_484: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_485: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_486: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_486: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_487: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_487: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_488: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_489: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_489: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_490: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_491: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_491: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_492: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_815_492: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_493: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_494: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_494: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_495: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_496: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_497: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_498: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_815_501: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_502: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_504: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_506: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_815_508: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_509: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_815_509: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_510: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_511: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_512: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_513: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_514: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_815_517: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_517: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_518: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_815_518: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_519: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_520: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_521: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(245, 239, 219, 1)",
    borderWidth: 1
  },
  View_815_522: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_523: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_523: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_524: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_525: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_525: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_526: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_528: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_815_529: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_815_529: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "uppercase"
  },
  View_815_530: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_531: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_532: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_533: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_534: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_534: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_535: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_536: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_537: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_537: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_538: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_538: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_539: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_540: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("767%"),
    minHeight: hp("767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("234%")
  },
  View_815_541: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("698%")
  },
  ImageBackground_815_542: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_545: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_564: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("546%")
  },
  ImageBackground_815_565: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_568: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_587: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110%")
  },
  ImageBackground_815_588: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_591: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_610: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%")
  },
  ImageBackground_815_611: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_614: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_633: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("1266%")
  },
  ImageBackground_815_634: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_637: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_656: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1004%")
  },
  View_815_657: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_658: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_659: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  ImageBackground_815_660: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_661: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  View_815_664: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_665: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_666: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_667: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_668: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_669: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_672: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_672: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_673: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_674: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_675: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_676: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_749: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_750: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_751: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_751: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_752: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_752: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_753: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_754: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_755: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_759: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_760: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_761: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_761: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_762: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_762: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_763: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_764: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_765: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_815_766: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_767: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_768: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_769: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_770: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_771: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_772: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_773: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_774: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_786: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_798: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_810: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_811: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_812: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_813: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_814: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_815: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_816: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_817: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_818: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_815_819: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_820: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_821: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_822: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_823: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_824: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_825: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_826: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_838: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_850: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_862: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_863: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_864: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_865: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_866: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_867: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_815_868: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_869: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_870: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_871: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_873: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_874: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_875: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_875: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_876: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_876: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_877: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_878: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_879: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_922: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_923: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_924: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_924: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_925: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_925: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_926: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%")
  },
  View_815_927: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_815_928: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_929: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_930: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("163%"),
    minHeight: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("-68%"),
    resizeMode: "cover"
  },
  View_815_931: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  ImageBackground_815_932: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
