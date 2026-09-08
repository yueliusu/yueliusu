import { useId, useRef, useState } from "react";
import { intro, links } from "../content";
import { HeartDoodle, LinkDoodle, SectionLabel } from "./desk";

const contactLink =
  "group/link relative inline-flex min-h-11 items-center text-sm text-soft underline decoration-soft/35 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-current";

function WechatContact({ src, label }: { src: string; label: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={`${contactLink} cursor-pointer`}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        {label}
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="contact-dialog fixed inset-0 m-auto max-h-[calc(100svh-2rem)] w-[min(24rem,calc(100vw-2rem))] overflow-y-auto rounded-[14px] border border-hair bg-paper p-6 text-ink backdrop:bg-ink/40"
        onClose={() => trigger.current?.focus()}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) {
            dialog.current?.close();
          }
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="pt-2 text-lg font-medium">
            关注公众号
          </h2>
          <button
            type="button"
            autoFocus
            className="min-h-11 min-w-11 cursor-pointer text-sm text-soft underline decoration-soft/35 underline-offset-4 hover:text-ink"
            onClick={() => dialog.current?.close()}
          >
            关闭
          </button>
        </div>
        <p
          id={descriptionId}
          className="mt-2 text-sm leading-relaxed text-soft"
        >
          用微信扫一扫；在手机上可保存二维码，再从微信相册识别。
        </p>
        <img
          src={src}
          alt="微信公众号关注二维码"
          width={430}
          height={430}
          className="mx-auto mt-5 h-auto w-full max-w-64"
        />
        <a href={src} download className={`${contactLink} mt-3`}>
          保存二维码
        </a>
      </dialog>
    </>
  );
}

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("");
  const email = intro.message.startsWith("mailto:")
    ? intro.message.slice("mailto:".length).split("?")[0]
    : "";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("邮箱已复制，可以粘贴到邮件应用。");
    } catch {
      setCopyStatus("复制失败，请选中上方邮箱地址手动复制。");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="rise mt-14 border-t border-hair pt-8"
    >
      <SectionLabel id="contact-heading">联系与关注</SectionLabel>
      <p className="text-sm leading-[1.8] text-soft">
        在这些地方找到 {intro.name}，交流技术，或联系内容合作。
      </p>
      <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
        {links.map((link) => (
          <li key={link.label}>
            {link.qrcode ? (
              <WechatContact src={link.qrcode} label={link.label} />
            ) : (
              <a href={link.href} className={contactLink}>
                {link.heart && <HeartDoodle />}
                {link.label}
                <LinkDoodle />
              </a>
            )}
          </li>
        ))}
      </ul>
      {email && (
        <div className="mt-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={intro.message}
              className="min-w-0 break-all text-sm text-soft underline decoration-soft/35 underline-offset-4"
            >
              {email}
            </a>
            <button
              type="button"
              className="min-h-11 cursor-pointer text-sm text-soft underline decoration-soft/35 underline-offset-4 hover:text-ink"
              onClick={copyEmail}
            >
              复制邮箱
            </button>
          </div>
          <p
            role="status"
            className="min-h-6 text-xs leading-relaxed text-soft"
          >
            {copyStatus}
          </p>
        </div>
      )}
    </section>
  );
}
