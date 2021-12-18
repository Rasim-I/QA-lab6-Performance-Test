
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ChuckCategory extends Simulation {

  private val httpProtocol = http
    .baseUrl("https://api.chucknorris.io")
    .inferHtmlResources(AllowList(), DenyList())
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")
  
  private val headers_0 = Map(
  		"accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  		"accept-encoding" -> "gzip, deflate, br",
  		"accept-language" -> "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,uk;q=0.6",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows",
  		"sec-fetch-dest" -> "document",
  		"sec-fetch-mode" -> "navigate",
  		"sec-fetch-site" -> "none",
  		"sec-fetch-user" -> "?1",
  		"upgrade-insecure-requests" -> "1"
  )
  
  private val headers_1 = Map(
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )


  private val scn = scenario("ChuckCategory")
    .exec(
      http("request_0")
        .get("/jokes/random?category=animal")
        .headers(headers_0)
        .resources(
          http("request_1")
            .get("/favicon.ico")
            .headers(headers_1)
        )
    )

	setUp(scn.inject(rampUsers(1000).during(10.seconds))).protocols(httpProtocol)
}
