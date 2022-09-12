[在线体验](https://demo.z-paging.zxlee.cn)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demo下载](https://ext.dcloud.net.cn/plugin?id=3935)
<div style="display: flex;flex-wrap: wrap;margin-top: 10px;" v-if="showPhone">
	<div style="position:relative;height: 650px;">
		<img style="width:350px;" src="https://www.zxlee.cn/github/uni-z-paging/phone.png"></img>
		<iframe id="iframe" style="width:302px;height:537px;left:24px;top:82px; position: absolute;" frameborder=0
			allowfullscreen="true" src="https://demo.z-paging.zxlee.cn">
		</iframe>
	</div>
	<div v-if="showDemoCode"
		style="flex: 1; padding: 0px 40px;display: flex;justify-content: center;align-items: center;flex-direction: column;">
		<img style="width:250px;" src="https://z-paging.zxlee.cn/public/img/code.png"></img>
		<div style="font-size: 12px;color: #888888;">左侧示例使用iframe插入体验不佳</div>
		<div style="font-size: 12px;color: #888888;">使用手机扫码获得更优体验</div>
	</div>
</div>

<script>
	export default {
		data() {
			return {
				showDemoCode: false,
				showPhone: false,
				windowWeight: 0
			}
		},
		watch: {
			windowWeight(newVal) {
				this.showDemoCode = this.isPC() && newVal > 600;
				this.showPhone = newVal > 400;
			}
		},
		mounted() {
			this.windowWeight = document.documentElement.clientWidth;

			addEventListener('resize', (res) => {
				if (res.currentTarget && res.currentTarget.window) {
					this.windowWeight = res.currentTarget.window.document.documentElement.clientWidth;
				}
			})
		},
		methods: {
			isPC() {
				var userAgentInfo = navigator.userAgent;
				var agents = ["Android", "iPhone",
					"SymbianOS", "Windows Phone",
					"iPad", "iPod"
				];
				for (let i = 0; i < agents.length; i++) {
					if (userAgentInfo.indexOf(agents[i]) > 0) {
						return false;
					}
				}
				return true;
			}
		}
	}
</script>
